import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();
function ComponentA() {
  const [user, setUser] = useState("surya");

  const [Id, setId] = useState(10);

  const man = () => {
    setUser("korey");
    setId(31)
  };
  return (
    <>
      <div className="Cbox">
        <h1>Component A</h1>
        <button onClick={man}>click</button>
        <h2>hello {user} GM</h2>

        <UserContext.Provider value={{ user, Id }}>
          <ComponentB />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default ComponentA;
