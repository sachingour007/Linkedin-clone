import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC3AQA6ULnJBU1rGMHFJlFRcTKIofz-SE8",
  authDomain: "linkein-clone-007.firebaseapp.com",
  projectId: "linkein-clone-007",
  storageBucket: "linkein-clone-007.appspot.com",
  messagingSenderId: "766737353310",
  appId: "1:766737353310:web:488afed1cdaef00c9642cf"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db, auth};