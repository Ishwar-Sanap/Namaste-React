
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfUapbrf6tx7Q5ETXaaGNoG3VnWL92QRI",
  authDomain: "netflixgpt-ca19f.firebaseapp.com",
  projectId: "netflixgpt-ca19f",
  storageBucket: "netflixgpt-ca19f.firebasestorage.app",
  messagingSenderId: "145492576128",
  appId: "1:145492576128:web:e88f254ef955ab84ee2365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exporting the auth instance for use in other components.
export const auth = getAuth(app);
