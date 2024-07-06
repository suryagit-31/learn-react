import React, { createContext, useContext } from "react";

import { UserContext } from "./componentA";

function ComponentD() {
  const {user,Id} = useContext(UserContext);
  return (
    <>
      <div className="Cbox">
        <h1>Component D</h1>
        <h2>{`lets use the ${user} ${Id}`}</h2>
      </div>
    </>
  );
}

export default ComponentD;
