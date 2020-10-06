import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDptrxSo6njO6c8qaukSjlgcb6UPLGUm-A",
  authDomain: "hirwab--clone.firebaseapp.com",
  databaseURL: "https://hirwab--clone.firebaseio.com",
  projectId: "hirwab--clone",
  storageBucket: "hirwab--clone.appspot.com",
  messagingSenderId: "707345589153",
  appId: "1:707345589153:web:d82d3559d0f129b1f821e0",
  measurementId: "G-GVB2EX82JR"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
