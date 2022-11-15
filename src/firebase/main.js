import { initializeApp } from 'firebase/app'
import {browserLocalPersistence, getAuth, setPersistence} from "firebase/auth"
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBtFP7bOswXed5YZYxcfb5bZwO6iQ4gzKs",
    authDomain: "botprzemek-vue-app.firebaseapp.com",
    projectId: "botprzemek-vue-app",
    storageBucket: "botprzemek-vue-app.appspot.com",
    messagingSenderId: "90256982680",
    appId: "1:90256982680:web:c1d2571866bcb33c0f86ed",
    measurementId: "G-YSKQCWGRQK",
    databaseURL: 'https://botprzemek-vue-app-default-rtdb.europe-west1.firebasedatabase.app/',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);

setPersistence(auth, browserLocalPersistence);