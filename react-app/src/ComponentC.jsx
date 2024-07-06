import React, { useContext } from "react";
import { UserContext } from "./componentA";

import ComponentD from "./ComponentD";

function ComponentC() {
  const { user, Id } = useContext(UserContext);
  return (
    <>
      <div className="Cbox">
        <h1>Component C {user}</h1>
        <ComponentD />
      </div>
    </>
  );
}

export default ComponentC;
