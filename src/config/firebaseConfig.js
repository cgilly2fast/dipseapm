import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDBzmpSEURpAliEXz637dgqHgrslmlSCr8",
  authDomain: "dipseapm.firebaseapp.com",
  databaseURL: "https://dipseapm.firebaseio.com",
  projectId: "dipseapm",
  storageBucket: "dipseapm.appspot.com",
  messagingSenderId: "252990979922"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;