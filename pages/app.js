import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, onValue, push, set,child } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
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
document.getElementById('submit').addEventListener("submit", submitForm)
function submitForm(e) {
  e.preventDefault();
  var name = getElementValue("name");
  var mail = getElementValue("mail");
  var dropdown = getElementValue("dropdown");
  var number = getElementValue("number");
  var date = getElementValue("date");
  var day = getElementValue("day");
  var msg=getElementValue("msg")
  if (name == "" || name == " " || name.length < 3) {
    alert("Enter Your Name");
    return;
  }
  if (mail == "" || mail== " ") {
    alert("Enter email");
    return;
  }
  if (dropdown== "") {
    alert("Choose A Theme");
    return;
  }
  if (number == "" || number == " ") {
    alert("Enter Phone Number");
    return;
  }
  var obj = {
    name: name,
    mail: mail,
    dropdown: dropdown,
    number: number,
    day: day,
    date: date,
    msg:msg
  };
  console.log(obj);
  saveData(obj)
  alert("Your Request has been submitted")
}
const saveData = (obj => {
  const userId = push(child(ref(db), 'reservations/')).key
  push(ref(db, 'reservations/'), {
    name: obj.name,
    mail: obj.mail,
    dropdown: obj.dropdown,
    number: obj.number,
    day: obj.day,
    date: obj.date,
    msg:obj.msg
    // userId:userId
  });
})
const getElementValue = (id) => {
  return document.getElementById(id).value;
}




