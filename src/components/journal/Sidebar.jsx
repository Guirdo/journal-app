import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon" />
                    <span> Aldo</span>
                </h3>

                <button
                    className="btn"
                >
                    Logout
                </button>
            </div>

            <div className="journal__new-entry mt-5">
                <i className="far fa-calendar fa-5x"></i>
                <p className="mt-5">New Entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
