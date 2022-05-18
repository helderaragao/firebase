import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

 const firebaseConfig = {
 apiKey: "AIzaSyC5NsTjkpEqY7x6OQZt6PaNQqBNoWuxs44",
    authDomain: "projeto-eb265.firebaseapp.com",
    databaseURL: "https://projeto-eb265-default-rtdb.firebaseio.com",
    projectId: "projeto-eb265",
    storageBucket: "projeto-eb265.appspot.com",
    messagingSenderId: "1045327691915",
    appId: "1:1045327691915:web:dc047460bf7b84a09c548e",
    measurementId: "G-S4ZDSQS50D"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

firebase.firestore();

export default firebase;