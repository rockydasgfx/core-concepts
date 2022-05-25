import React, { useEffect, useState } from "react";

const ApiCall = () => {
  const [parsons, setParsons] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setParsons(data));
  }, []);

  return (
    <div>
      <h1>ApiCall with useEffect</h1>

      <ul>
        {parsons.map((parson) => (
          <li key={parson.id}>name: {parson.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCall;
