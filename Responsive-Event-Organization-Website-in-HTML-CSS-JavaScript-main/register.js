import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcwyXLdPeCDeIzBL4YA8LEtYeKDUFKjxo",
    authDomain: "event-management-80a84.firebaseapp.com",
    projectId: "event-management-80a84",
    storageBucket: "event-management-80a84.appspot.com", // Fixed storage bucket URL
    messagingSenderId: "189500455676",
    appId: "1:189500455676:web:21c895dec938c84853b579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Sign-Up Form Submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account created successfully!");
            window.location.href = "login.html"; // Redirect to login page after successful signup
        })
        .catch((error) => {
            alert(error.message);
        });
});
