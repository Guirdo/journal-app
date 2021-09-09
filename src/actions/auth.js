import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateCurrentUser, updateProfile } from "@firebase/auth"
import { googleAuthProvider } from "../firebase/firebaseConfig"
import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login('12345', 'Pedro'))
        }, 3500)

    }
}

export const startRegisterWithEmailAndPassword = (email,password,name) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email,password)
        .then(async ({ user }) => {
            await updateProfile(user, {
                displayName: name
            })
            console.log(user)
            dispatch(login(user.uid, user.displayName))
        });
    }
} 

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid, displayName
    }
})

