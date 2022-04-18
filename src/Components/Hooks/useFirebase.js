import React, { useState } from 'react'
import app from '../../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setuser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleprovider)
            .than(result => {
                const user = result.user
                setuser(user)
                console.log(user);
            }
            )
        console.log('sign in soon')
    }
    return { user, signInWithGoogle }


}

export default useFirebase; 