import React, { useState, useEffect, useRef } from "react";
function Refer() {
  const inputRef = useRef(null);

  function m() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  }

  useEffect(() => {
    console.log("new render");
    console.log(inputRef);
  });

  return (
    <>
      <button onClick={m}>click me</button>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default Refer;
