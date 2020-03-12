import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

export class Menu extends Component {

    render() {
        return (
            <div style={hiddenMenu}>
                <ul style={showMenu}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <FontAwesomeIcon icon={faSyncAlt} />
                </ul>
            </div>
        )
    }
}

const hiddenMenu = {
    background: "#232b4e",
}

const showMenu = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyle: "none",
    height: "5vh",
    fontSize: "1.5rem"

}

export default Menu
