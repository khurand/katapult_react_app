import React from 'react'
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-regular-svg-icons';

// Functional component
export const MainTimer = () => {
    return (
        <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ delay: 400, duration: 400 }}
        >
            {props => (
                <div className="main-timer" style={props}>
                    <p>
                        60:00
                    </p>

                    <div className="timer-button">
                        <FontAwesomeIcon icon={faStopCircle} />
                        <FontAwesomeIcon icon={faPauseCircle} />
                        <FontAwesomeIcon icon={faPlayCircle} />
                    </div>
                </div>
            )}
        </Spring>
    )
}
