import React, { useState, useEffect, useRef } from "react";

function Watch() {
  const [isRunning, setRun] = useState(false);
  const [elapsedTime, setEptime] = useState(0);
  const interval = useRef(0);
  const Id_intervalRef = useRef(null);
  const [list_save, editList] = useState([]);

  useEffect(() => {
    if (isRunning) {
      interval.current = Date.now() - elapsedTime;
      Id_intervalRef.current = setInterval(() => {
        setEptime(Date.now() - interval.current);
      }, 10);
    } else {
      clearInterval(Id_intervalRef.current);
    }

    return () => {
      clearInterval(Id_intervalRef.current);
    };
  }, [isRunning]);

  function Start() {
    if (!isRunning) {
      setRun(true);
    }
  }

  function Stop() {
    if (isRunning) {
      setRun(false);
    }
  }

  function reset() {
    setRun(false);
    setEptime(0);
    editList([]);
  }

  function format_time() {
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  function lap_Time() {
    const L_time = format_time();
    editList([...list_save, L_time]);
  }

  const lap_list = list_save.map((L, index) => (
    <li key={index}>
      Lap {index + 1}: {L}
    </li>
  ));
  return (
    <>
      <div className="boxe">
        <span>{format_time()}</span>
        <br />
        <button className="start" onClick={Start}>
          start
        </button>
        <button className="stop" onClick={Stop}>
          stop
        </button>
        <button className="reset" onClick={reset}>
          reset
        </button>
        <button onClick={lap_Time}>Lap</button>
        <div className="save">
          <ul className="lap_list">{lap_list}</ul>
        </div>
      </div>
    </>
  );
}

export default Watch;
