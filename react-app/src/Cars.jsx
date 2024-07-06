import { useCallback, useState } from "react";

function Button() {
  const [Count, setcount] = useState({
    year: 2023,
    maker: "audi",
    model: "A8",
  });

  function year(event) {
    setcount({ ...Count, year: event.target.value });
  }

  function model(event) {
    setcount({ ...Count, model: event.target.value });
  }

  function maker(event) {
    setcount({ ...Count, maker: event.target.value });
  }

  return (
    <>
      <h2>
        Your car is {Count.maker} model {Count.model} in year {Count.year}
      </h2>
      <input type="text" value={Count.maker} onChange={maker} />
      <input
        type="number"
        name=""
        id=""
        value={Count.year}
        onChange={year}
      />{" "}
      <br />
      <input type="text" name="" id="" value={Count.model} onChange={model} />
      <br />
    </>
  );
}

export default Button;
