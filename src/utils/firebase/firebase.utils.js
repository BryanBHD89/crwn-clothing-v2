import { initializeApp } from "firebase/app"

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl8Yfmvp4DdLDsrSHwBQOZM27xJboZzB4",
    authDomain: "crwn-clothing-db-9e27a.firebaseapp.com",
    projectId: "crwn-clothing-db-9e27a",
    storageBucket: "crwn-clothing-db-9e27a.appspot.com",
    messagingSenderId: "977961144149",
    appId: "1:977961144149:web:0c4f3ca69a791d1727a9dc"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const db = getFirestore()


export const createUserDocumentFromAuth = async (userAuth, additionalInformantion) => {
    if(!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid)

    console.log(userDocRef)
    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot)
    console.log(userSnapShot.exists())

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformantion
            })
        }
        catch(error){
            console.log("there was an error creating the user", error.message)
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async() => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
