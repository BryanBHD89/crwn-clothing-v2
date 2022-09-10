import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
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
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
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
                createdAt
            })
        }
        catch(error){
            console.log("there was an error creating the user", error.message)
        }
    }

    return userDocRef
}