import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MainTimer = () => {
  // state = {
  //   heure: 1,
  //   minutes: 0,
  //   secondes: 0,
  // };

  // static propTypes = {};
  const [isTicking, setIsTicking] = useState(false);
  const [minutes, setMinutes] = useState(60);
  const [secondes, setSecondes] = useState(0);

  // const format = (time) => {
  //   let seconds = setSecondes(time % 60);
  //   let minutes = setMinutes(Math.floor(time / 60));
  //   minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  //   seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
  //   return minutes + ":" + seconds;
  // };

  const toggle = () => {
    setIsTicking(!isTicking);
  };

  const reset = () => {
    setIsTicking(false);
    setMinutes(60);
    setSecondes(0);
  };

  const start = () => {
    if (secondes === -1) {
      setSecondes(59);
    }
  };

  const min = () => {
    if (secondes === 59) {
      setMinutes(minutes - 1);
    }
  };

  const end = () => {
    if (minutes === 0 && secondes === 0) {
      setIsTicking(false);
    }
  };

  useEffect(() => {
    start();
    min();
    let secondesInterval = null;
    if (isTicking) {
      secondesInterval = setInterval(() => {
        setSecondes(secondes - 1);
      }, 1000);
    } else if (!isTicking && secondes !== 0) {
      clearInterval(secondesInterval);
    }
    end();
    return () => clearInterval(secondesInterval);
  }, [isTicking, secondes]);

  return (
    <div className='main-timer'>
      <p>
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {secondes < 10 ? `0${secondes}` : secondes}
      </p>

      <div className='timer-button'>
        <button onClick={toggle}>{isTicking ? "Pause" : "Start"}</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

MainTimer.propTypes = {
  // title: PropTypes.string.isRequired,
  // heading: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
};

export default MainTimer;
