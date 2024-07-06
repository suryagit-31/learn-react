import React, { useContext } from "react";
import ComponentC from "./ComponentC";

import { UserContext } from "./componentA";

function ComponentB() {
  const { user, Id } = useContext(UserContext);
  return (
    <>
      <div className="Cbox">
        <h1>{`Component B ${user}`}</h1>
        <ComponentC />
      </div>
    </>
  );
}

export default ComponentB;
