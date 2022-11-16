import { ref, set, update } from 'firebase/database'
import { database } from '@/firebase/main'

export function addUserData (email){
    email = email.toLocaleLowerCase().replace('.', 'DOT');
    set(ref(database, `users/${email}`), {
        username: '',
        balance: {
            zloty: 0,
            gwiazdki: 0,
        },
    }).then(()=>{
        console.log('User created');
    }).catch((error)=>{
        console.log(error);
    });
}

export function setUsername (email, username){
    const updates = {};
    updates[`/users/${email}/username/`] = username;
    return update(ref(database), updates);
    // set(ref(database, `users/${email}`), {
    //     username: username,
    // }).then(()=>{
    //     console.log('Username changed');
    // }).catch((error)=>{
    //     console.log(error);
    // });
}