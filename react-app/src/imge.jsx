import reactLogo from "./assets/react.svg";
function IMG() {
  function handle(e) {
    e.target.style.display = "none";
    console.log(e);
  }

  const j = <img src={reactLogo} alt="" onClick={(e) => handle(e)} />;

  return j;
}


export default IMG;
