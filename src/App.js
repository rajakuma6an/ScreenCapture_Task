import logo from "./logo.svg";
import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [enterValues, setEnterValues] = useState([]);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      showKeys(enterValues.join(""));
      setEnterValues([]);
    } else {
      setEnterValues((values) => [...values, e.key]);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, [enterValues]);

  const showKeys = (keys) => {
    alert(`EnterValues: ${keys}`);
  };
  return (
    <div className="App">
      <p>lets press the keys and hit enter</p>
    </div>
  );
}

export default App;
