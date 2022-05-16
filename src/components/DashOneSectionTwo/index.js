import { Chart1, Chart2, Row } from "./dashOneSectionTwo.Styles";
import MainIndicators from "../MainIndicators";
import UserLists from "../userLists";

const DashOneSectionTwo = () => {
  return (
    <>
      <Row>
        <Chart1>
          <MainIndicators />
        </Chart1>
        <Chart2>
          <UserLists />
        </Chart2>
      </Row>
    </>
  );
};

export default DashOneSectionTwo;
