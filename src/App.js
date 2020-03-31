import React from "react";
import ReactD3, {
  BarChart,
  PieChart,
  LineChart,
  AreaChart
} from "react-d3-components";
import "./App.css";

function App() {
  var data = [
    {
      label: "Salary",
      values: [
        { x: "Jan", y: 10 },
        { x: "Feb", y: 4 },
        { x: "March", y: 3 }
      ]
    }
  ];
  var pieData = {
    label: "Salary Person",
    values: [
      { x: "Salary of A", y: 10 },
      { x: "Salary of B", y: 4 },
      { x: "Salary of C", y: 3 }
    ]
  };
  var otherData = [
    {
      label: "Employee A Performance",
      values: [
        { x: 0, y: 2 },
        { x: 1.3, y: 5 },
        { x: 3, y: 6 },
        { x: 3.5, y: 6.5 },
        { x: 4, y: 6 },
        { x: 4.5, y: 6 },
        { x: 5, y: 7 },
        { x: 5.5, y: 8 }
      ]
    },
    {
      label: "Employee B Performance",
      values: [
        { x: 0, y: 3 },
        { x: 1.3, y: 4 },
        { x: 3, y: 7 },
        { x: 3.5, y: 8 },
        { x: 4, y: 7 },
        { x: 4.5, y: 7 },
        { x: 5, y: 7.8 },
        { x: 5.5, y: 9 }
      ]
    }
  ];
  var sort = null;
  return (
    <div className="App">
      <div className="chart">
        <BarChart
          data={data}
          width={420}
          height={400}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          className="chart"
        />
        <p>Month wise Salary</p>
      </div>
      <div className="chart">
        <PieChart
          data={pieData}
          width={420}
          height={400}
          margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
          sort={sort}
          className="chart"
        />
        <p>Employee wise Salary</p>
      </div>
      <div className="chart">
        <LineChart
          data={otherData}
          width={420}
          height={400}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          className="chart"
        />
        <p>Employee Performance</p>
      </div>
      <div className="chart">
        <AreaChart
          data={otherData}
          width={420}
          height={400}
          yOrientation="right"
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          className="chart"
        />
        <p>Employee Performance</p>
      </div>
    </div>
  );
}

export default App;
