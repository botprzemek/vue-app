import { initializeApp } from 'firebase/app'
import {browserLocalPersistence, getAuth, setPersistence} from "firebase/auth"
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "xxx",
    authDomain: "name.firebaseapp.com",
    projectId: "name",
    storageBucket: "name.appspot.com",
    messagingSenderId: "000",
    appId: "1:xxx",
    measurementId: "G-XXX",
    databaseURL: 'https://xxx.europe-west1.firebasedatabase.app/',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);

setPersistence(auth, browserLocalPersistence);