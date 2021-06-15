import firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyArKf2cGHII5lHl3Xg9-wEzT-1sbjig1A4",
  authDomain: "my-app-88b63.firebaseapp.com",
  databaseURL: "https://my-app-88b63-default-rtdb.firebaseio.com",
  projectId: "my-app-88b63",
  storageBucket: "my-app-88b63.appspot.com",
  messagingSenderId: "964854803225"
};

const devConfig = {
  apiKey: "AIzaSyArKf2cGHII5lHl3Xg9-wEzT-1sbjig1A4",
  authDomain: "my-app-88b63.firebaseapp.com",
  databaseURL: "https://my-app-88b63-default-rtdb.firebaseio.com",
  projectId: "my-app-88b63",
  storageBucket: "my-app-88b63.appspot.com",
  messagingSenderId: "964854803225"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();