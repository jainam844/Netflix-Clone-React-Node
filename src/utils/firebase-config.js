// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyD2TMhJWQ5oq550yuvEY2HduQYcdu-k_Ug",
    authDomain: "react-netflix-clone-6d868.firebaseapp.com",
    projectId: "react-netflix-clone-6d868",
    storageBucket: "react-netflix-clone-6d868.appspot.com",
    messagingSenderId: "533764621988",
    appId: "1:533764621988:web:3816f17607e2e334a04831",
    measurementId: "G-JRP15G896F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firbaseAuth = getAuth(app)