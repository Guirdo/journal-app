import { addDoc, collection } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { auth: { uid } } = getState()

        const newNote = {
            title: 'New note',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote)

        dispatch(activeNote(docRef.id, newNote))
    }
}

export const activeNote = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const setNotes = (notes) => ({
    type: types.noteLoad,
    payload: notes
})