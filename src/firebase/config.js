import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVc8YZ6wH9yJA2DTlOOQqKyI-XfwmSBp4",
  authDomain: "olxweb-6df3b.firebaseapp.com",
  projectId: "olxweb-6df3b",
  storageBucket: "olxweb-6df3b.appspot.com",
  messagingSenderId: "551851625804",
  appId: "1:551851625804:web:d0d679cb0a51438377d3e9",
  measurementId: "G-JZ1JVHM3E8"
};

  export default firebase.initializeApp(firebaseConfig)