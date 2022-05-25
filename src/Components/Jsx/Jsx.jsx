import React from "react";
import "./Jsx.css";

const Jsx = () => {
  const javascriptCode = "in jsx { javascript write this wey }";
  const styles = {
    fontSize: "30px",
    color: "green",
  };
  return (
    <div>
      <h1>JSX </h1>
      <h2>jsx is likes html Element but not html </h2>
      <h2 className="jsx">in jsx class attribute called className</h2>
      <h2>{javascriptCode}</h2>
      <h2 style={styles}>write style in object</h2>
      <h2 style={{ color: "gold" }}>inline css write </h2>
    </div>
  );
};

export default Jsx;
