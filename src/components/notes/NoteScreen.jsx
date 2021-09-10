import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.note)
    const [ formValues, handleInputChange ] = useForm(note)

    const { title, body } = formValues



    return (
        <div className="note__main-content">
            <NoteAppBar />

            <div className="note__content">
                <form action="">
                    <input
                        type="text"
                        placeholder="Some awesome"
                        className="note__title-input"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />

                    <textarea
                        placeholder="What happened today?"
                        className="note__textarea"
                        value={body}
                        onChange={handleInputChange}
                    ></textarea>

                    {
                        note.url &&
                        <div className="note__image">
                            <img
                                src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?size=626&ext=jpg&ga=GA1.2.1933447203.1629590400"
                                alt="sea_photo"
                            />
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}
