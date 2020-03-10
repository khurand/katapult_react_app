import React from 'react'

export const Header = () => {
    return (
        <div className="header">
            <h2>Katapult</h2>
            <input placeholder="Nom de la partie" type="text"></input>
            <i className="fa fa-cog"></i>
        </div>
    )
}