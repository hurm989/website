// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { getAuth, signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHUaatKk-z4DSN-_jQ44_MZ98TodSunvA",
    authDomain: "signlog-653ab.firebaseapp.com",
    databaseURL: "https://signlog-653ab-default-rtdb.firebaseio.com",
    projectId: "signlog-653ab",
    storageBucket: "signlog-653ab.appspot.com",
    messagingSenderId: "143168223227",
    appId: "1:143168223227:web:de277edb2b0fbc841e7d5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();



var logout=document.getElementById("logout")
logout.addEventListener('click', (e) => {
    const auth = getAuth();
    signOut(auth).then(() => {
       alert("signout")
       window.location.assign('../index.html')
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        // An error happened.
    });
})