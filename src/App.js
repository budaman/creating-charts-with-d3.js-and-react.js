import React, { Component } from "react";
import "./App.css";

import BarChart from "./BarChart";
import MyFirstChart from "./MyFirstChart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>d3ia dashboard</h2>
        </div>
        <div>
          <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
          <MyFirstChart data={[4, 8, 15, 16, 23, 42]} />
        </div>
      </div>
    );
  }
}

export default App;
