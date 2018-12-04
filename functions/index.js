const functions = require('firebase-functions');
// Import and initialize the Firebase Admin SDK.
const admin = require('firebase-admin');
admin.initializeApp();
// TODO(DEVELOPER): Write the addWelcomeMessages Function here.
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
