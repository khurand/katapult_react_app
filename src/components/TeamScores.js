import React from 'react'

export const TeamScores = () => {
    return (
        <div className="team-scores">
            <div className="team1">
                <input placeholder="Equipe 1"></input>
                <p>0</p>
                <h4>Score</h4>
                <div className="score-btns">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
            <div className="team2">
                <input placeholder="Equipe 2"></input>
                <p>0</p>
                <h4>Score</h4>
                <div className="score-btns">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}
