import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBfFVFoovz_zEEbrde1ftVv_rAiwIiVhZY",
  authDomain: "photo-social-mern-90401.firebaseapp.com",
  projectId: "photo-social-mern-90401",
  storageBucket: "photo-social-mern-90401.appspot.com",
  messagingSenderId: "1007200690643",
  appId: "1:1007200690643:web:f3e832736c2f82eef1cf26",
  measurementId: "G-0VXPR1EHZW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }