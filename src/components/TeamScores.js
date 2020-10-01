import React, { useState } from "react";

// Functional component
const TeamScores = () => {
  // score equipe 1
  const [score, setScore] = useState(0);

  // score equipe 2
  const [score2, setScore2] = useState(0);

  const addPoint = () => {
    setScore(score + 1);
  };
  const removePoint = () => {
    // Empêche d'avoir des scores négatifs
    if (score > 0) {
      setScore(score - 1);
    }
  };

  const addPoint2 = () => {
    setScore2(score2 + 1);
  };
  const removePoint2 = () => {
    if (score2 > 0) {
      setScore2(score2 - 1);
    }
  };

  return (
    <div className='team-scores'>
      <div className='team1'>
        <input placeholder='Equipe 1'></input>
        <div>
          <div className='penalties'>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className='scoreboard'>
            <p>{score}</p>
            <h3>Score</h3>
          </div>
        </div>
        <div className='score-btns'>
          <button onClick={addPoint}>
            <span>+</span>
          </button>
          <button onClick={removePoint}>
            <span>-</span>
          </button>
        </div>
      </div>
      <div className='team2'>
        <input placeholder='Equipe 2'></input>
        <div>
          <div className='scoreboard'>
            <p>{score2}</p>
            <h3>Score</h3>
          </div>
          <div className='penalties'>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className='score-btns'>
          <button onClick={addPoint2}>
            <span>+</span>
          </button>
          <button onClick={removePoint2}>
            <span>-</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamScores;
