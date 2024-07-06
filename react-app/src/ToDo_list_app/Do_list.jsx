import { useState } from "react";
import "./list.css";

function Do_list() {
  const [activity, setAct] = useState("");
  const [sets, make] = useState([]);

  function act(event) {
    setAct(event.target.value);
  }

  function removeWork(index) {
    make(sets.filter((_, i) => index !== i));
  }

  function details() {
    if (activity.trim() !== "") {
      make((sets) => [...sets, activity]);
    }
    setAct("");
  }

  function moveUp(ind_val) {
    if (ind_val > 0) {
      const newSets = [...sets];
      [newSets[ind_val - 1], newSets[ind_val]] = [
        newSets[ind_val],
        newSets[ind_val - 1],
      ];
      make(newSets);
    }
  }

  function moveDown(ind_val) {
    if (ind_val < sets.length - 1) {
      const newSets = [...sets];
      [newSets[ind_val], newSets[ind_val + 1]] = [
        newSets[ind_val + 1],
        newSets[ind_val],
      ];
      make(newSets);
    }
  }

  return (
    <>
      <div className="outer">
        <h1>To-Do-List</h1>
        <div className="add">
          <input type="text" className="inp" value={activity} onChange={act} />
          <button className="but" onClick={details}>
            add
          </button>
        </div>
        <div>
          <ul>
            {sets.map((one, index) => (
              <li key={index}>
                <div className="list-div">
                  {one}
                  <div className="buts">
                    <button className="del" onClick={() => removeWork(index)}>
                      complete
                    </button>
                    <button className="hands" onClick={() => moveUp(index)}>
                      👆
                    </button>
                    <button className="hands" onClick={() => moveDown(index)}>
                      👇
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .outer {
            border: 2px solid black;
            display: flex;
            align-items: center;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bolder;
            text-transform: capitalize;
            cursor: pointer;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
}

export default Do_list;
