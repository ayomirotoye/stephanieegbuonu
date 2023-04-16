
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import {getDatabase} from 'firebase/database'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAQqCje8s-vuYJ0-jXb4C6pVQZazWqMV4M",

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;
export const db = getDatabase(app);