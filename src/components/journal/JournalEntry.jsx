import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o=)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new brand day
                </p>

                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem, animi qui eius corporis veritatis pariatur iure praesentium
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28/08</h4>
            </div>
        </div>
    )
}
