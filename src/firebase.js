import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyAqtSWxy48eOmqlFujJHTM3_3Xw3d3r82A",
    authDomain: "fb-messenger-763e4.firebaseapp.com",
    projectId: "fb-messenger-763e4",
    storageBucket: "fb-messenger-763e4.appspot.com",
    messagingSenderId: "811319139258",
    appId: "1:811319139258:web:0d38cb9c2030f23b931b83",
    measurementId: "G-61L4DF9ETS"

})

const db=firebaseApp.firestore() 
export default db;