import React from 'react'

export const TeamScores = () => {
    return (
        <div className="team-scores">
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
    )
}
