// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const APIKEY = import.meta.env.VITE_APIKEY;
const AUTHDOMAIN = import.meta.env.VITE_AUTHDOMAIN;
const PROJECTID = import.meta.env.VITE_PROJECTID;
const STORAGEBUCKET = import.meta.env.VITE_STORAGEBUCKET;
const MESSAGINSENDERID = import.meta.env.VITE_MESSAGINSENDERID;
const APPID = import.meta.env.VITE_APPID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINSENDERID,
  appId: APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
