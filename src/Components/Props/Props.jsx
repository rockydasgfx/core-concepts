import React from "react";

const Props = (props) => {
  return (
    <div>
      <h1>Props</h1>
      <h2>props sand data dynamicly in components</h2>
      <h3>your name: {props.name}</h3>
    </div>
  );
};

export default Props;
