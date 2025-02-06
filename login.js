// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEvlzFPvwLrQkctLdy7UlEqkpI0woW8-Y",
  authDomain: "graphs-52368.firebaseapp.com",
  projectId: "graphs-52368",
  storageBucket: "graphs-52368.firebasestorage.app",
  messagingSenderId: "1045840644780",
  appId: "1:1045840644780:web:67f5698f3d0a1ff115ed09"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("loginButton").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Login successful: " + user.email);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

document.getElementById("createAccountButton").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Account created: " + user.email);
    })
    .catch((error) => {
      console.log("Error: " + error.message);
    });
});
