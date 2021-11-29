import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";


// Initialize Firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();


    //====================== User Register====================
    const registerUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        })
        .catch((error) => {

        });

    }

    //=============== sign in with email and password=================
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            })
            .catch((error) => {
                console.log(error)
            });
    }

    // ==================User Logout======================

    const logOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    //==================== Manage User ======================
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
           setUser(user)
            } else {
            setUser({})
            }
        });
        return () => unsubscribe;
    },[])



    // Return document............
    return {
        user,
        registerUser,
        logOut,
        loginUser
    }

}
export default useFirebase;