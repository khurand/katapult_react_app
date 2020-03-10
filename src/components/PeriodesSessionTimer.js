import React from 'react'

export const PeriodesSessionTimer = () => {
    return (
        <div className="per-ses-timer">
            <div className="periodes">
                <h3>Periodes</h3>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
            <div className="sessions-timer">
                <h3>Session</h3>

                <div className="plus-minus">
                    <ul className="val-min-buttons">
                        <li>+</li>
                        <li>-</li>
                    </ul>
                    <p>
                        00:00
                    </p>
                    <ul className="val-sec-buttons">
                        <li>+</li>
                        <li>-</li>
                    </ul>
                </div>

                <div className="sessions-button">
                    <i className="fa fa-stop-circle-o"></i>
                    <i className="fa fa-pause-circle-o"></i>
                    <i className="fa fa-play-circle-o"></i>
                </div>
            </div>
        </div>
    )
}
