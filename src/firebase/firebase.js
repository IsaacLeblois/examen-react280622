// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgBvPfC_CZtaeO7uV_0Fc_at6IBCemcmE",
  authDomain: "examen-react-4dfa9.firebaseapp.com",
  projectId: "examen-react-4dfa9",
  storageBucket: "examen-react-4dfa9.appspot.com",
  messagingSenderId: "1009656739559",
  appId: "1:1009656739559:web:8f792c62a3b305fbb6d442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export default storage