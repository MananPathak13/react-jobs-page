import React from 'react'

const Card = ({ children, bg = 'bg-gray' }) => {
    return (
        <div className={`${bg} p-6 rounded-lg shawdow-md`}>
            {children}
        </div>
    )
}

export default Card
