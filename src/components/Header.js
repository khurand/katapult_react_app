import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export class Header extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 300, duration: 300 }}
            >
                {props => (
                    <div className="header" style={props}>
                        <h2>Katapult</h2>
                        <input placeholder="Nom de la partie" type="text"></input>
                        <FontAwesomeIcon icon={faCog} style={{ fontSize: "2rem" }}></FontAwesomeIcon>
                    </div>
                )}
            </Spring >
        )
    }
}