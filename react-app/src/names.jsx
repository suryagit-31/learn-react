import React, { useState, useEffect } from "react";
function Names() {
  const [width, setW] = useState(window.innerHeight);
  const [height, setH] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", Res);
    console.log("event listener added ");

    return () => {
      window.removeEventListener("resize", Res);
      console.log("event listner  has been removed");
    };
  }, []);

  useEffect(() => {
    document.title = `${width} and ${height}`;
  }, [width, height]);
  function Res() {
    setW(window.innerWidth);
    setH(window.innerHeight);
  }

  return (
    <>
      <h2>width:{width} px</h2>
      <h2>height:{height} px</h2>
    </>
  );
}

export default Names;
