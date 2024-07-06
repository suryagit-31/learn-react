import React, { useState } from "react";

function Objects() {
  const [cars, setC] = useState([]);
  const [car_company, setComp] = useState("");
  const [car_model, setModel] = useState("");
  const [car_year, setYear] = useState(new Date().getFullYear());

  function setdetails() {
    const details = {
      year: car_year,
      model: car_model,
      company: car_company,
    };

    setC((prevcars) => [...prevcars, details]);

    setComp("");
    setYear(new Date().getFullYear());
    setModel("");
  }

  function remove(index) {
    setC(cars.filter((_, i) => index !== i));
  }

  function comp(event) {
    setComp(event.target.value);
  }
  function mode(event) {
    setModel(event.target.value);
  }

  function yaar(event) {
    setYear(event.target.value);
  }
  return (
    <>
      <h2>list of cars </h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => remove(index)}>
            CAR : {car.company} <br /> MODEl: {car.model} <br />
            Manufactured on {car.year}
          </li>
        ))}
      </ul>
      <label htmlFor="car">
        Company
        <input type="text" id="car" value={car_company} onChange={comp} />
        <br />
      </label>
      <label htmlFor="">
        model
        <input type="text" value={car_model} onChange={mode} />
      </label>
      <br />
      <label htmlFor="">
        year
        <input type="number" value={car_year} onChange={yaar} />
      </label>
      <br />
      <button onClick={setdetails}>ADD CAR</button>
    </>
  );
}

export default Objects;
