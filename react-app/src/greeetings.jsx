import PropTypes from "prop-types";
function Greet() {
  const fruits = [
    { id: 1, name: "apple", calories: 90 },
    { id: 2, name: "orange", calories: 110 },
    { id: 3, name: "mango", calories: 492 },
    new Object({ id: 4, name: "goa", calories: 37 }),
  ];

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); use localecompare to    compare names
  // fruits.sort((a,b)=>b.id-a.id) desecnding order
  fruits.sort((a, b) => a.id - b.id); //ascending order

  const lowcal = fruits.filter((fruit) => fruit.calories < 100);

  const highcal = fruits.filter((fruit) => fruit.calories > 100);

  const items = fruits.map((fruit) => {
    return (
      <li key={fruit.id}>
        {fruit.id}:{fruit.name} &nbsp;{fruit.calories}
      </li>
    );
  });

  const lows = lowcal.map((peel) => (
    <li key="peel.id">
      {peel.id} : {peel.name} : {peel.calories}
    </li>
  ));

  const highs = highcal.map((peel) => (
    <li key="peel.id">
      {peel.id} : {peel.name} : {peel.calories}
    </li>
  ));

  return (
    <>
      <h1 className="list-head">fruits</h1>
      <ul>{items}</ul>
      <h1 className="list-head">highcalories </h1>
      <ul>{highs}</ul>
      <h1 className="list-head">lowcalories</h1>
      <ul>{lows}</ul>
    </>
  );
}

export default Greet;
