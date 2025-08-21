import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {"123+456-789*0/.=".split("").map((btn, i) => (
          <button
            key={i}
            onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

export default App;
