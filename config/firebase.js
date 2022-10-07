
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = require('./AppConfig.json')

// Firebase 
// export const firebase_app = firebase.initializeApp({
//   "apiKey": config.firebase.apiKey,
//   "authDomain": config.firebase.authDomain,
//   "databaseURL": config.firebase.databaseURL,
//   "projectId": config.firebase.projectId,
//   "storageBucket": config.firebase.storageBucket,
//   "messagingSenderId": config.firebase.messagingSenderId,
//   "appId": config.firebase.appId
// });
export const firebase_app = firebase.initializeApp({
  "apiKey": "AIzaSyAmB1rnx-KDWPYleqHcTmU1I57-kZczrkA",
  "authDomain": "react-endless.firebaseapp.com",
  "databaseURL": "https://react-endless.firebaseio.com",
  "projectId": "react-endless",
  "storageBucket": "react-endless.appspot.com",
  "messagingSenderId": 179755231748,
  "appId": "1:179755231748:web:44d12bfe9196f209256351"
});