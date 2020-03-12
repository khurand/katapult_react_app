import React from 'react'
import { Spring } from 'react-spring/renderprops'

export const TeamScores = () => {
    return (
        <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ delay: 600, duration: 600 }}
        >
            {props => (
                <div className="team-scores" style={props}>
                    <div className="team1">
                        <input placeholder="Equipe 1"></input>
                        <div>
                            <div className="penalties">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="scoreboard">
                                <p>0</p>
                                <h3>Score</h3>
                            </div>
                        </div>
                        <div className="score-btns">
                            <button><span>+</span></button>
                            <button><span>-</span></button>
                        </div>
                    </div>
                    <div className="team2">
                        <input placeholder="Equipe 2"></input>
                        <div>
                            <div className="scoreboard">
                                <p>0</p>
                                <h3>Score</h3>
                            </div>
                            <div className="penalties">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="score-btns">
                            <button><span>+</span></button>
                            <button><span>-</span></button>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    )
}
