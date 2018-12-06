const functions = require('firebase-functions');
// Import and initialize the Firebase Admin SDK.
const admin = require('firebase-admin');
admin.initializeApp();



// Sends a welcome message.
exports.addWelcomeMessages = functions.auth.user().onCreate(async (user) => {
  console.log('A new user signed in for the first time.');
  const fullName = user.displayName || 'Anonymous';

  // Saves the new welcome message into the database
  // which then displays it in the FriendlyChat clients.
  await admin.database().ref('messages').push({
    name: 'Bot',
    profilePicUrl: './assets/P.png', // Firebase logo
    text: `${fullName} logged on for the first time!`,
  });
  console.log('Welcome message written to database.');
});

// Sends a notifications to all users when a new message is posted.
exports.sendNotifications = functions.database.ref('/messages/{messageId}').onCreate(
    async (snapshot) => {
      // Notification details.
      const text = snapshot.val().text;
      const payload = {
        notification: {
          title: `${snapshot.val().name} posted ${text ? 'a message' : 'an image'}`,
          body: text ? (text.length <= 100 ? text : text.substring(0, 97) + '...') : '',
          icon: snapshot.val().photoUrl || '/images/profile_placeholder.png',
          click_action: `https://${process.env.GCLOUD_PROJECT}.firebaseapp.com`,
        }
      };

      // Get the list of device tokens.
      const allTokens = await admin.database().ref('fcmTokens').once('value');
      if (allTokens.exists()) {
        // Listing all device tokens to send a notification to.
        const tokens = Object.keys(allTokens.val());

        // Send notifications to all tokens.
        const response = await admin.messaging().sendToDevice(tokens, payload);
        await cleanupTokens(response, tokens);
        console.log('Notifications have been sent and tokens cleaned up.');
      }
    });

// Cleans up the tokens that are no longer valid.
function cleanupTokens(response, tokens) {
  // For each notification we check if there was an error.
  const tokensToRemove = {};
  response.results.forEach((result, index) => {
    const error = result.error;
    if (error) {
      // Cleanup the tokens who are not registered anymore.
      if (error.code === 'messaging/invalid-registration-token' ||
          error.code === 'messaging/registration-token-not-registered') {
        tokensToRemove[`/fcmTokens/${tokens[index]}`] = null;
      } else {
        console.error('Failure sending notification to', tokens[index], error);
      }
    }
  });
  return admin.database().ref().update(tokensToRemove);
}
