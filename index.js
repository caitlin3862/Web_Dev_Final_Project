import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAVI-O63RmEaiI5sofR7WJB9HQ_2wALmdM",
    authDomain: "webdevfinalproject-415be.firebaseapp.com",
    projectId: "webdevfinalproject-415be",
    storageBucket: "webdevfinalproject-415be.firebasestorage.app",
    messagingSenderId: "427835831559",
    appId: "1:427835831559:web:14251f2f1ee633075201a2"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const db = getFirestore(app);


const viewLoggedOut = document.getElementById("logged-out-view");
const viewLoggedIn = document.getElementById("logged-in-view");

const emailInputEl = document.getElementById("email");
const passwordInputEl = document.getElementById("password");

document.addEventListener("DOMContentLoaded", function () {
    const signInButtonEl = document.getElementById("loginButton");
    const createAccountButtonEl = document.getElementById("createAccountButton");

    signInButtonEl.addEventListener("click", authSignInWithEmail);
    createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail);
});

onAuthStateChanged(auth, (user) => {
    console.log("Auth state changed. User:", user);  // Debugging log
    if (user) {
        showLoggedInView();
    } else {
        showLoggedOutView();
    }
});


function authSignInWithEmail() {
    console.log("Login button clicked!");  // Debugging log
    let email = emailInputEl.value;
    let password = passwordInputEl.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((success) => {
            console.log("User signed in successfully:", success.user);
            showLoggedInView(); 
        })
        .catch((error) => {
            console.error("Login error:", error.message);
        });
}

function authCreateAccountWithEmail() {
    console.log("Create Account button clicked!");  // Debugging log
    let email = emailInputEl.value;
    let password = passwordInputEl.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Account created successfully:", userCredential.user);
            showLoggedInView(); 
        })
        .catch((error) => {
            console.error("Account creation error:", error.message);
        });
}

function showLoggedInView() {
    hideView(viewLoggedOut);
    showView(viewLoggedIn);
    loadCharts();
}

function showLoggedOutView() {
    hideView(viewLoggedIn);
    showView(viewLoggedOut);
}

function showView(view) {
    view.style.display = "flex";  
}

function hideView(view) {
    view.style.display = "none";
}

function loadCharts() {
    let x = [];
    let y = [];

    async function getData(fileName, num) {
        const response = await fetch(fileName);
        const data = await response.text();
        const rows = data.split("\n").slice(1);
        let idx = 0;
        rows.forEach((elem) => {
            if (!(idx + 1 === rows.length - 1)) {
                const row = elem.split(",");
                const schoolName = row[1];
                const numOfCourses = row[num];

                x[idx] = schoolName;
                y[idx] = parseInt(numOfCourses);
                idx++;
            }
        });
    }

    async function makeChart(idName, fileName, chartTitle, num2) {
        await getData(fileName, num2);

        const ct = document.getElementById(idName);
        new Chart(ct, {
            type: 'line',
            data: {
                labels: x,
                datasets: [{
                    label: chartTitle,
                    data: y,
                    borderWidth: 1,
                    borderColor: 'rgb(254, 181, 197)'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 2
                        }
                    }
                }
            }
        });
    }

    makeChart("chart_one", "2016-2017_CS_Reports.csv", "Number of CS Courses in Schools", 2);
    makeChart("chart_two", "2016-2017_CS_Reports.csv", "Number of AP CS Courses in Schools", 3);
    makeChart("chart_three", "2016-2017_CS_Reports.csv", "Number of Full CS Courses in Schools", 4);
    makeChart("chart_four", "2016-2017_CS_Reports.csv", "Number of Partial CS Courses in Schools", 5);
}
