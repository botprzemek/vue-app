import { ref, set } from 'firebase/database'
import { database } from '@/firebase/main'

export default (email)=>{
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