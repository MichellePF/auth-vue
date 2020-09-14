import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB45rbkArG9kQNZJYQ8xOmoeloXKmOdGns",
    authDomain: "auth-vue-e602c.firebaseapp.com",
    databaseURL: "https://auth-vue-e602c.firebaseio.com",
    projectId: "auth-vue-e602c",
    storageBucket: "auth-vue-e602c.appspot.com",
    messagingSenderId: "406726022524",
    appId: "1:406726022524:web:7814c397a0f46e99bd00f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export {db, auth}