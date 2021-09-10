import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "@firebase/auth"
import { googleAuthProvider } from "../firebase/firebaseConfig"
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch( startLoading() )

        const auth = getAuth()
        signInWithEmailAndPassword(auth,email,password)
            .then( ({ user }) =>{
                dispatch( login( user.uid, user.displayName ))
                dispatch( finishLoading() )
            })
            .catch( e => {
                dispatch( finishLoading() )
                console.log(e)
            })
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

export const startLogout = () => {
    return async (dispatch) => {
        await getAuth().signOut()

        dispatch( logout() )
    }
}

export const logout = () => ({
    type: types.logout
})