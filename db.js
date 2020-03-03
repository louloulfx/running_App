import firebase from "firebase";
import "@firebase/firestore";
// Initialize Firebase
const firebaseConfig = {
  projectId: "runningapp-da94c",
  apiKey: "AIzaSyAOOYnYnkVEXDh3lCDXqymuEFWJcNYRPcw",
  authDomain: "runningapp-da94c.firebaseio.com",
  databaseURL: "https://runningapp-da94c.firebaseio.com",
  storageBucket: "runningapp-da94c.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export default dbh;
