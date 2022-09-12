import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { useEffect } from "react"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

const SignIn = () => {



    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user)
    }



    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn