function Veg(props) {
  const vegges = props.items;

  const grass = vegges.map((gra) => (
    <li>
      {gra.id} : {gra.name} :{gra.calories}
    </li>
  ));

  return (
    <>
      <h1 className="list-head">{props.category}</h1>
      <ul>{grass}</ul>;
    </>
  );
}

Veg.defaultProps = {
  items: [],
  category: "roken",
};

export default Veg;
