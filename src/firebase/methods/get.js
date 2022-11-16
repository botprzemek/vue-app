import { ref, get, child } from 'firebase/database'
import { database } from "@/firebase/main"

const databaseRef = ref(database);

export default (email, callback)=>{
    get(child(databaseRef, `/users/${email}`))
        .then((snapshot)=>{
            if (snapshot.exists()) callback(snapshot.val());
            else console.log("No data available");
        })
        .catch((error) => console.error(error));
}