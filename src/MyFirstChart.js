import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
class MyFirstChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }
  componentDidMount() {
    this.createBarChart();
  }
  componentDidUpdate() {
    this.createBarChart();
  }
  createBarChart() {
    const node = this.node;
    const data = this.props.data;
    select(node)
      .selectAll("div")
      .data(data)
      .enter()
      .append("div")
      .style("width", d => d * 10 + "px")
      .text(d => d);
  }
  render() {
    return <div className="chart" ref={node => (this.node = node)} />;
  }
}
export default MyFirstChart;
