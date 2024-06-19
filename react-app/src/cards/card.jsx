import propTypes from "prop-types";

function Card(props) {
  const k = (
    <div className="card">
      <img src={props.source} alt="" />
      <h2 className="heading">{props.name}</h2>
      <h3>HP: {props.hp}</h3>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        voluptate?
      </p>
    </div>
  );

  Card.propTypes = {
    name: propTypes.string,
    source: propTypes.string,
    hp: propTypes.number,
  };

  Card.defaultprops={
    name:'sutya'
  }

  return k;
}

export default Card;
