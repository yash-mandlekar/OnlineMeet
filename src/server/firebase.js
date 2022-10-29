import firebase from "firebase";

var firebaseConfig = {
  apiKey: 'AIzaSyBNBY_iVoWMIoQPfi6PpvwblJPWv0w49IE',
  databaseURL: 'https://lokdesh-clone-default-rtdb.asia-southeast1.firebasedatabase.app/',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
