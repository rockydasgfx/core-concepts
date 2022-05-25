import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increce = () => setCounter(counter + 1);
  const decreace = () => setCounter(counter - 1);
  return (
    <div>
      <h1>state</h1>
      <h2>{counter}</h2>
      <button onClick={increce}>increce</button>
      <button onClick={decreace}>decreace</button>
    </div>
  );
};

export default Counter;
