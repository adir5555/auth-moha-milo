// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM7n58zZTgUIRdZBGpmhnd_uwqTd6lB3o",
  authDomain: "clone-and-run.firebaseapp.com",
  projectId: "clone-and-run",
  storageBucket: "clone-and-run.appspot.com",
  messagingSenderId: "874941233521",
  appId: "1:874941233521:web:580368200f8fb029e09ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app