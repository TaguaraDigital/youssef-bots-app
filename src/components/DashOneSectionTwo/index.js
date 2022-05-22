import { Chart1, Chart2, Row } from './dashOneSectionTwo.Styles';
// import MainIndicators from "../kpi/MainIndicators";
import MainCriptos from '../kpi/MainCriptos';
import UserLists from '../userLists';

const DashOneSectionTwo = () => {
  return (
    <>
      <Row>
        <Chart1>
          <MainCriptos />
        </Chart1>
        <Chart2>
          <UserLists />
        </Chart2>
      </Row>
    </>
  );
};

export default DashOneSectionTwo;
