import "./clock.css";

import React, { useState, useEffect } from "react";
function Digi() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function FormatTime() {
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    min = min < 10 ? `0${min}` : `${min}`;
    sec = min < 10 ? `0${sec}` : `${sec}`;

    let meridian = "";

    if (hours > 12) {
      meridian = "PM";
    } else {
      meridian = "AM";
    }

    return `${hours}:${min}:${sec}:${meridian}`;
  }

  return (
    <>
      <div className="clock">
        <div className="clock-block">
          <span className="time">{FormatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default Digi;
