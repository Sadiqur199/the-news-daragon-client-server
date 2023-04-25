// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB3fqTJvLzi6i6y9d1wo0B-vC7IUG5ZEU",
  authDomain: "the-news-dragon-e2109.firebaseapp.com",
  projectId: "the-news-dragon-e2109",
  storageBucket: "the-news-dragon-e2109.appspot.com",
  messagingSenderId: "924195171883",
  appId: "1:924195171883:web:f7d7b5484dc3ae92fb446e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)