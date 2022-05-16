import { Chart1, Chart2, Row } from "./dashOneSectionThree.Styles";
import ExchangeRateChart from "../ExchangeRateAdmin/ExchangeRateChart";
import ExchangeRateAdmin from "../ExchangeRateAdmin";

const DashOneSectionThree = () => {
  return (
    <Row>
      <Chart1>
        <ExchangeRateChart />
      </Chart1>
      <Chart2>
        <ExchangeRateAdmin />
      </Chart2>
    </Row>
  );
};

export default DashOneSectionThree;
