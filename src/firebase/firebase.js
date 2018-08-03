import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHXCJ8YE1sDgL9sWRfafuPlWAxMRe7WLw",
    authDomain: "expensify-24166.firebaseapp.com",
    databaseURL: "https://expensify-24166.firebaseio.com",
    projectId: "expensify-24166",
    storageBucket: "expensify-24166.appspot.com",
    messagingSenderId: "385388853835"
  };
  firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };






// const config = {
//   apiKey: process.env.AIzaSyCHXCJ8YE1sDgL9sWRfafuPlWAxMRe7WLw,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.https://expensify-24166.firebaseio.com/,
//   projectId: process.env.expensify-24166,
//   storageBucket: process.env.gs://expensify-24166.appspot.com,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };




