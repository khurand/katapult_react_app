import React from 'react'

export const MainTimer = () => {
    return (
        <div className="main-timer">
            <p>
                60:00
            </p>

            <div className="timer-button">
                <i className="fa fa-stop-circle-o"></i>
                <i className="fa fa-pause-circle-o"></i>
                <i className="fa fa-play-circle-o"></i>
            </div>

        </div>
    )
}
