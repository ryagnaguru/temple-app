// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCuBA0nHIKVgRkYVe2glSqctGr-ys99Bs",
  authDomain: "templeproject-c3121.firebaseapp.com",
  projectId: "templeproject-c3121",
  storageBucket: "templeproject-c3121.appspot.com",
  messagingSenderId: "493162832127",
  appId: "1:493162832127:web:29edf69dd76a5d5947acca"
};

// Initialize Firebase
const fireBaseApp = () => initializeApp(firebaseConfig);
export default fireBaseApp;
