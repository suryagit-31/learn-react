import React, { useState } from "react";

function Counter() {
  const [name, setName] = useState("");
  const [num, setnum] = useState(1);
  const [com, setCom] = useState("");
  const [payment, setPay] = useState("visa");
  const [delivary, setDel] = useState("whats shipping");

  function handle(event) {
    setName(event.target.value);
  }

  function del(event) {
    setDel(event.target.value);
  }

  function Number(event) {
    setnum(event.target.value);
  }

  function comment(event) {
    setCom(event.target.value);
  }

  function Pay(event) {
    setPay(event.target.value);
  }

  return (
    <>
      <div>
        <input type="text" value={name} onChange={handle} placeholder="enter" />
        <p>Name:{name}</p>
        <input
          type="number"
          name="quantity"
          onChange={Number}
          id=""
          value={num}
        />
        <p>Quantity:{num}</p>
        <textarea
          name="comment"
          onChange={comment}
          id=""
          value={com}
        ></textarea>
        <br />
        <p>{com}</p>
        <select name="" value={payment} onChange={Pay} id="">
          <option value="visa">visa</option>
          <option value="mastercard">mastercard</option>
          <option value="paytm">paytm</option>
        </select>
        <p>payment:{payment}</p>
        <label htmlFor="pickup">
          <input
            type="radio"
            name="surya"
            id="pickup"
            value="pickup"
            checked={delivary === "pickup"}
            onChange={del}
          />
          pick up
        </label>
        <label htmlFor="drop">
          <input
            type="radio"
            name="surya"
            id="drop"
            value="drop"
            checked={delivary === "drop"}
            onChange={del}
          />
          drop
        </label>
        <p>shipping :{delivary}</p>
      </div>
    </>
  );
}

export default Counter;
