// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
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
var login = document.getElementById("login");


login.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
 
       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
 
         const dt = new Date();
          update(ref(database, 'users/' + user.uid),{
           last_login: dt,
         })
 
          alert('User loged in!');
         window.location.assign('admin.html')
         // ...
       })
       .catch((error) => { const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
  });

 });