import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBUi-fUsMC3MmJ6gMC9qdSUjciNvZqDNmI",
    authDomain: "assignment2-61808.firebaseapp.com",
    databaseURL: "https://assignment2-61808.firebaseio.com",
    projectId: "assignment2-61808",
    storageBucket: "assignment2-61808.appspot.com",
    messagingSenderId: "1028764225899"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
