import React from "react";
import Filters from "../../../components/Filters/intex";
import "./style.css";
import Chart from "react-apexcharts";
import { barOptions } from "./chart-options";

const chartData = [
  {
    x: "Gabriel",
    y: 10,
  },
];

const Charts = () => {
  return (
    <div className="page-container">
      <Filters link="/records" linkText="VER TABELA" />
      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">Jogos Mais Votados</h1>

          <div className="games-container">
            <Chart
              options={barOptions}
              type="bar"
              width="900"
              height="650"
              series={[{ data: chartData }]}
            />
          </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
          </div>
          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
