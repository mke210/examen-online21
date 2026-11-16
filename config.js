const firebaseConfig = {
  apiKey: "AIzaSyAwiVjGRCkDTzZRexmtKC0fFMZlRR40c_c",
  authDomain: "examen-online-7e048.firebaseapp.com",
  projectId: "examen-online-7e048",
  storageBucket: "examen-online-7e048.firebasestorage.app",
  messagingSenderId: "151255926983",
  appId: "1:151255926983:web:48efabfd7be58ffa22d6e2"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
window.auth = auth;
window.db = db;
