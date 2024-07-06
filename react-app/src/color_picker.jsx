import React, { useState } from "react";

function Color() {
  const [col, setCol] = useState("#FFFFFF");

  function Color_picker(event) {
    setCol(event.target.value);
  }

  return (
    <>
      <div className="box">
        <h1>Color Picker</h1>
        <div className="innerbox">
          <h3 className="he">color:{col}</h3>
        </div>
        <label htmlFor="book">
          <input
            type="color"
            name=""
            id="book"
            value={col}
            onChange={Color_picker}
          />
          <b> select Color</b> 
        </label>
      </div>
      <style jsx>{`
        .innerbox {
          font-size: 30px;
          text-align: center;
          background-color: ${col};
        }
        .he {
          margin-top: 40px;
          text-transform: capitalize;
          color: white;
        }
      `}</style>
      ;
    </>
  );
}

export default Color;
