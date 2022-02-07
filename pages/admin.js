import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, onValue, push, set, child, get } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyBqGq6veJ5BVp46SIjDAddoLsfPMdj1Wsc",
    authDomain: "websitee-f7be9.firebaseapp.com",
    databaseURL: "https://websitee-f7be9-default-rtdb.firebaseio.com",
    projectId: "websitee-f7be9",
    storageBucket: "websitee-f7be9.appspot.com",
    messagingSenderId: "1008181071739",
    appId: "1:1008181071739:web:920e2458641f25021af7de"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(db, "reservations");
var reserList = document.getElementById("reserList");
function renderList(list) {
    list.forEach(function (e) {
        reserList.innerHTML += `<tr>
          <td>${e.name}</td>
          <td>${e.mail}</td>
          <td>${e.number}</td>
          <td>${e.dropdown}</td>
          <td>${e.day}</td>
          <td>${e.date}</td>
          <td>${e.msg}</td>
        </tr>`;
    });

}


window.getList = function () {
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            reserList.innerHTML = "";
            var arr = [];
            snapshot.forEach(function (list) {
                // console.log(list.val())
                arr.push(list.val());
            });
            renderList(arr);
        });

    },
        {
            onlyOnce: true
        });
};

window.prev=function(){
    window.location.assign('../index.html')
}