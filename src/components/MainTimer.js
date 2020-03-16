import React, { useContext } from 'react'
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-regular-svg-icons';
import { GlobalContext } from '../context/GlobalState';


// Functional component
export const MainTimer = () => {
    // Importe le globalContext pour que le component MainTimer ait accès au state global
    const { chronos, startTimer, pauseTimer, stopTimer } = useContext(GlobalContext);

    return (
        <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ delay: 400, duration: 400 }}
        >
            {props => (
                <div className="main-timer" style={props}>
                    <p>
                        { chronos.minutes } : { chronos.seconds }
                    </p>

                    <div className="timer-button">
                        <FontAwesomeIcon icon={faPlayCircle} onClick={() => startTimer()}/>
                        <FontAwesomeIcon icon={faPauseCircle} onClick={() => pauseTimer()}/>
                        <FontAwesomeIcon icon={faStopCircle} onClick={() => stopTimer()}/>
                    </div>
                </div>
            )}
        </Spring>
    )
}
