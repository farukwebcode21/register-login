import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, updateProfile, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";


// Initialize Firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    //====================== User Register====================
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                    }).then(() => {
                    // Profile updated!
                    // ...
                    }).catch((error) => {
                    // An error occurred
                    // ...
                    });
                history.replace('/');

        })
        .catch((error) => {
            setAuthError(error.message);

        }).finally(() => setIsLoading(false));

    }

    //=============== sign in with email and password=================
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message);
            })
        .finally(() => setIsLoading(false));
    }

    // ===========================Google Signin===================
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }


    // ==================User Logout======================

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
            setAuthError(error.message);

        })
        .finally(() => setIsLoading(false));
    }

    //==================== Manage User ======================
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
           setUser(user)
            } else {
            setUser({})
        }
            setIsLoading(false);
        });
        return () => unsubscribe;
    },[])



    // Return document............
    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle

    }

}
export default useFirebase;