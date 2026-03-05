const firebaseConfig = {
  apiKey: "AIzaSyDp9H-l4CK1LUP-DB2ZauxWWisha53uaNk",
  authDomain: "hwanimusicacademy.firebaseapp.com",
  projectId: "hwanimusicacademy",
  storageBucket: "hwanimusicacademy.firebasestorage.app",
  messagingSenderId: "287901482074",
  appId: "1:287901482074:web:8432cd4ec75c6888c5ac63",
  measurementId: "G-F97467F1QH"
};

firebase.initializeApp(firebaseConfig);
const db   = firebase.firestore();
const auth = firebase.auth();
