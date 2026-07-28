import React from "react";
import "./App.css";

function App() {

  const showMessage = (msg) => {
    document.getElementById("result").innerHTML = msg;
  };

  return (
    <div className="container">
      <h1>Experiment 3 - Important Concepts of React.js</h1>

      <div className="button-container">
        <button onClick={() => showMessage("Hello! Welcome to React.js.")}>
          Hello
        </button>

        <button onClick={() => showMessage("React uses reusable components.")}>
          Components
        </button>

        <button onClick={() => showMessage("JSX allows HTML inside JavaScript.")}>
          JSX
        </button>

        <button onClick={() => showMessage("State is used to store data in React.")}>
          State
        </button>

        <button onClick={() => showMessage("Props are used to pass data between components.")}>
          Props
        </button>

        <button onClick={() => showMessage("Event Handling is easy in React using onClick.")}>
          Events
        </button>
      </div>

      <div className="output" id="result">
        Click any button to display the output.
      </div>
    </div>
  );
}

export default App;