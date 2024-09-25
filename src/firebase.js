import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase Auth

const firebaseConfig = {
  apiKey: "AIzaSyBlVYaC2WHMD-hO6tJnN14X4Ge7i_2uEgs",
  authDomain: "hacathon-project.firebaseapp.com",
  projectId: "hacathon-project",
  storageBucket: "hacathon-project.appspot.com",
  messagingSenderId: "599861792821",
  appId: "1:599861792821:web:6271de91f2f9036115217c",
  measurementId: "G-04TR5SYS19"
};


const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp); 

export { auth };
