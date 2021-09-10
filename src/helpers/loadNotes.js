import { collection, getDocs } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export const loadNotes = async (uid) => {
    const notesSnap = await getDocs(collection(db, `${uid}/journal/notes`))
    const notes = []

    notesSnap.forEach(snapshot => {
        notes.push({
            id: snapshot.id,
            ...snapshot.data()
        })
    })

    console.log(notes)

    return notes
}