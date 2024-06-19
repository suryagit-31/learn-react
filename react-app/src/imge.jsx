function IMG() {
  let m =
    "https://images.pexels.com/photos/59844/owl-little-owl-bird-animal-59844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const handle = () => {
    console.log("ooooooopsssss");
  };
  const j = <img src={m} alt="" onClick={handle} />;
  return j;
}

export default IMG;
