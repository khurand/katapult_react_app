import React, { useState } from 'react'
import { Spring } from 'react-spring/renderprops'

// Functional component
export function TeamScores() {

    // State in an array of object
    const [score, setScore] = useState(0);

    const addPoint = () => {
        setScore(score + 1)
    }
    const removePoint = () => {
        // Empêche d'avoir des scores négatifs
        if(score > 0){
            setScore(score - 1)
        }
    }

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
                                <p>{score}</p>
                                <h3>Score</h3>
                            </div>
                        </div>
                        <div className="score-btns">
                            <button onClick={addPoint}><span>+</span></button>
                            <button onClick={removePoint}><span>-</span></button>
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
