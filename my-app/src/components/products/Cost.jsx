import React, { useState } from "react";
import "./Cost.scss";
function Cost({ findItem }) {
  const [minCost, setMinCost] = useState("");
  const [maxCost, setMaxCost] = useState("");

  const handleChangeMinCost = (e) => {
    setMinCost(e.target.value);
  };

  const handleChangeMaxCost = (e) => {
    setMaxCost(e.target.value);
  };

  return (
    <>
      <div className="costInputDiv">
        <input
          onChange={handleChangeMinCost}
          placeholder="add min cost"
          value={minCost}
        />
        <div className="inputLine"></div>
        <input
          onChange={handleChangeMaxCost}
          placeholder="add max cost"
          value={maxCost}
        />
      </div>

      <button
        className="filterCostButton"
        onClick={() => findItem(minCost, maxCost)}
      >
        Add
      </button>
    </>
  );
}

export default Cost;
