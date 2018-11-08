var firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBLcfwhzN8eAbS7fg1wVx6AIWR4Orz6nr0",
  authDomain: "ecbm-31cf0.firebaseapp.com",
  databaseURL: "https://ecbm-31cf0.firebaseio.com",
  projectId: "ecbm-31cf0",
  storageBucket: "",
  messagingSenderId: "85157949430"
};

// Get elements
const txtEmail = document.getElementById('txtEmail')
const txtPassword = document.getElementById('txtPassword')
const btnLogin = document.getElementById('btnLogin')
const btnSignup = document.getElementById('btnSignup')
const btnLogout = document.getElementById('btnLogout')

// Add login event
btnLogin.addEventListener("click", e => {
  // Get email and pass
  const email = txtEmail.value;
  const pass = txtxPassword.value;
  const auth = firebase.auth();
  // Signin
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
})

// Add signup event
btnSignup.addEventListener("click", e => {
  // Get email and pass
  const email = txtEmail.value;
  const pass = txtxPassword.value;
  const auth = firebase.auth();
  // Signin
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
})

// Add logout event
btnLogout.addEventListener("click", e => {
  firebase.auth().signOut();
})

// Add a realtime listener
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    console.log(firebaseUser);
    btnLogout.classList.remove("hide");
    window.location = "home.html"; // After successful login, user will be redirected to home.html
  } else {
    console.log("User is not logged in."");
    btnLogout.classList.add("hide");
  }
})
