import React from 'react'

export const NoteAppBar = () => {
    return (
        <div className="note__appbar">
            <span>August 28th 2021</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
