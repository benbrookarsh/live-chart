import React from "react";
import ReactDOM from "react-dom";
import Chart from "./app";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <Chart />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
