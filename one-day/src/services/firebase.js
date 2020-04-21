import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD88SbAjSPfwzTCHRuMtFKogP9hVCn1QoU",
    authDomain: "one-day-messenger.firebaseapp.com",
    databaseURL: "https://one-day-messenger.firebaseio.com",
    projectId: "one-day-messenger",
    storageBucket: "one-day-messenger.appspot.com",
    messagingSenderId: "503212585099",
    appId: "1:503212585099:web:e5a156977809c7d30ea48e",
    measurementId: "G-45DN39SNXR"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
export const auth = firebase.auth;
export const db = firebase.database();