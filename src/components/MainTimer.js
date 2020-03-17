import React, { useContext } from 'react'
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-regular-svg-icons';
import { GlobalContext } from '../context/GlobalState';
import Countdown,  { zeroPad } from 'react-countdown'


// Functional component
export const MainTimer = () => {
    // Importe le globalContext pour que le component MainTimer ait accès au state global
    const { startTimer, pauseTimer, stopTimer } = useContext(GlobalContext);
    const Completionist = () => <span>Partie terminée !</span>;

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
        // Render a completed state
        return <Completionist />;
        } else {
        // Render a countdown
         return <span>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
        }
    };

    
    return (
        <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ delay: 400, duration: 400 }}
        >
            {props => (
                <div className="main-timer" style={props}>
                    {/* <p>
                    { `0${ state.hour }` } : 
                    { `0${ state.minutes }` } : 
                    { state.seconds < 10 ? `0${ state.seconds }` : state.seconds }
                    </p> */}

                    <Countdown date={Date.now() + 3600000} renderer={renderer} autoStart={true}>
                        <Completionist />
                    </Countdown>

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
