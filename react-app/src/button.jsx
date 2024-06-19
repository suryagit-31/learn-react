function Button() {
  const m = <button onClick={(e) => handle("surya", e)}>click me 😋 </button>;

  function handle(name, e) {
    e.target.innerHTML = `${name} clicked me `;
    console.log(e);
  }

  return m;
}

export default Button;
