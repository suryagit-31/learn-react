import React, { useState, useEffect } from "react";

function Effect() {
  const [Count, setC] = useState(0);
  const [Col, SetCol] = useState("green");

  useEffect(() => {
    console.log("echanges changes ");
    document.title = `count:${Count} ${Col}`;
  }, [Count, Col]);

  function inc() {
    setC((C) => C + 1);
  }

  function sub() {
    setC((C) => C - 1);
  }

  function Clr() {
    SetCol((C) => (C === "green" ? "red" : "blue"));
  }

  return (
    <>
      <p className="para" style={{ color: Col }}>
        count:{Count}
      </p>
      <button onClick={inc}>ADD</button>
      <button onClick={sub}>subract</button>
      <button onClick={Clr}>changeColor</button>

      <style jsx>
        {`
          .para {
            font-size: 45px;
          }
        `}
      </style>
    </>
  );
}

export default Effect;
