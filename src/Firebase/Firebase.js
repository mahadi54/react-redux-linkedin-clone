import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBrsMLDOpJ6tpURPT2DLr4sTg2htAOwdWs",
    authDomain: "react-redux-linkedin-clo-d06f1.firebaseapp.com",
    projectId: "react-redux-linkedin-clo-d06f1",
    storageBucket: "react-redux-linkedin-clo-d06f1.appspot.com",
    messagingSenderId: "919271959225",
    appId: "1:919271959225:web:ba00287afa2e574976c968",
    measurementId: "G-9N0EGS98F4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};