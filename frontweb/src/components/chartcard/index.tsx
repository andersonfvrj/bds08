import "./styles.css";
import ReactApexChart from "react-apexcharts";
import { buildPieChartConfig } from "./helpers";
import { formatPrice } from "../../utils/formatters";

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  soma: number;
};

function ChartCard({ labels = [], name, series = [], soma }: Props) {
  return (
    <div className="board-container">
      <div className="base-card base-card-chart">
        <div className="titulo-container">
          <h1>{formatPrice(soma)}</h1>
          <span>Total de vendas</span>
        </div>
        <div className="chart-container">
          <ReactApexChart
            options={buildPieChartConfig(labels, name)}
            type="donut"
            width="400"
            series={series}
          />
        </div>
      </div>
    </div>
  );
}

export default ChartCard;
