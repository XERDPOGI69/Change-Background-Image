import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDhgsiTVcqTdNjawLIsnNw2k21tpwWd0PI",
    authDomain: "aqueous-impact-351219.firebaseapp.com",
    databaseURL: "https://aqueous-impact-351219-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aqueous-impact-351219",
    storageBucket: "aqueous-impact-351219.appspot.com",
    messagingSenderId: "678046794632",
    appId: "1:678046794632:web:b924a8143bb113ba40703d",
    measurementId: "G-4RYXJ6W9WM"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  function saveUserPreferences(userId, backgroundImageUrl) {
    db.collection("users").doc(userId).set({ backgroundImageUrl });
  }
  

  function getUserPreferences(userId) {
    return db.collection("users").doc(userId).get().then((doc) => {
      if (doc.exists) {
        return doc.data().backgroundImageUrl;
      }
      return null;
    });
  }
  