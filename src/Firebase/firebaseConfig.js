import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDSnlpgz0-Ex2x05nQSbpsvV6vtdjrlTXo",
    authDomain: "her-bride-box-ug.firebaseapp.com",
    databaseURL: "https://her-bride-box-ug-default-rtdb.firebaseio.com",
    projectId: "her-bride-box-ug",
    storageBucket: "her-bride-box-ug.appspot.com",
    messagingSenderId: "822328398052",
    appId: "1:822328398052:web:98b7ef7a70de661b945cf1",
    measurementId: "G-Z1513XCVNQ"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)
  export const firestore = getFirestore(app)
  export const storage = getStorage(app)
  
