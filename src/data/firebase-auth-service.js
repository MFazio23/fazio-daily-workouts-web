import {getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {app} from "./firebase-service";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const onUserStateChanged = (onResult) => {
    onAuthStateChanged(auth, user => {
        onResult(user)
    })
}

const signInWithGoogle = (onSuccess, onError) => {
    signInWithPopup(auth, provider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);

            if (onSuccess) onSuccess({
                user: result.user,
                token: credential.accessToken,
            })
        }).catch(error => {
            console.log("Error signing in.");
            console.log("Error code:", error.code);
            console.log("Error message:", error.message);
            if (onError) onError(error);
        })
}

export {
    onUserStateChanged,
    signInWithGoogle
}