import React, { useEffect, useRef, useState } from "react";

function Foods() {
  const [foods, setFoods] = useState(["apple", "orange", "goa"]);
  const inputRef = useRef(null);

  const sell = foods.map((food, index) => (
    <li onClick={() => removeFood(index)} key={index}>
      {food}
    </li>
  ));

  useEffect(() => {
    console.log("new render");
  });

  function addf() {
    let fr = inputRef.current.value;
    if (fr != "") {
      setFoods((f) => [...f, fr]);
      inputRef.current.value = "";
    } else {
      window.alert("input is empty ");
    }
  }

  function removeFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>list of foods</h1>
      <ul className="sell">{sell}</ul>
      <input type="text" id="newFruit" ref={inputRef} />
      <button onClick={addf} className="b_foods">
        Add Foods{" "}
      </button>
    </>
  );
}

export default Foods;
