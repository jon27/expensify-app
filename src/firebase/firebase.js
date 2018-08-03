import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
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




