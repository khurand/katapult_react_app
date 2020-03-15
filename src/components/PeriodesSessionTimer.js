import React, { useContext } from 'react'
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-regular-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import AddOutlined from '@material-ui/icons/AddOutlined';
import RemoveOutlined from '@material-ui/icons/RemoveOutlined';
import { GlobalContext } from '../context/GlobalState';


export const PeriodesSessionTimer = () => {
    const { chronos } = useContext(GlobalContext);

    return (
        <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ delay: 500, duration: 500 }}
        >
            {props => (
                <div className="per-ses-timer" style={props}>
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
                                <li style={{ color: "white", listStyle: "none" }}>
                                    <IconButton color="inherit">
                                        <AddOutlined />
                                    </IconButton>
                                </li>
                                <li style={{ listStyle: "none" }}>
                                    <IconButton color="inherit">
                                        <RemoveOutlined />
                                    </IconButton>
                                </li>

                            </ul>
                            <p>
                            { chronos[1].minuts } : { chronos[1].seconds }
                            </p>
                            <ul className="val-sec-buttons">
                                <li style={{ color: "white", listStyle: "none" }}>
                                    <IconButton color="inherit">
                                        <AddOutlined />
                                    </IconButton>
                                </li>
                                <li style={{ listStyle: "none" }}>
                                    <IconButton color="inherit">
                                        <RemoveOutlined />
                                    </IconButton>
                                </li>
                            </ul>
                        </div>

                        <div className="sessions-button">
                            <FontAwesomeIcon icon={faStopCircle} />
                            <FontAwesomeIcon icon={faPauseCircle} />
                            <FontAwesomeIcon icon={faPlayCircle} />
                        </div>
                    </div>
                </div >
            )
            }
        </Spring >
    )
}
