// import React, { useContext } from 'react'
import React from "react";

const PeriodesSessionTimer = () => {
  // const { chronos } = useContext(GlobalContext);

  return (
    <div className='per-ses-timer'>
      <div className='periodes'>
        <h3>Periodes</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <div className='sessions-timer'>
        <h3>Session</h3>

        <div className='plus-minus'>
          <ul className='val-min-buttons'>
            <li style={{ color: "white", listStyle: "none" }}></li>
            <li style={{ listStyle: "none" }}></li>
          </ul>
          <p>
            {/* { chronos[1].minuts } : { chronos[1].seconds } */}
            00:00
          </p>
          <ul className='val-sec-buttons'>
            <li style={{ color: "white", listStyle: "none" }}></li>
            <li style={{ listStyle: "none" }}></li>
          </ul>
        </div>

        <div className='sessions-button'>
          {/* <FontAwesomeIcon icon={faStopCircle} />
              <FontAwesomeIcon icon={faPauseCircle} />
              <FontAwesomeIcon icon={faPlayCircle} /> */}
        </div>
      </div>
    </div>
  );
};

export default PeriodesSessionTimer;
