import DashOneSectionOne from "../DashOneSectionOne";
import DashOneSectionTwo from "../DashOneSectionTwo";
import DashOneSectionThree from "../DashOneSectionThree";
import { Container, SectionThree, SectionTitle } from "./dashOne.Styles";

const DashOne = () => {
  return (
    <Container>
      <SectionTitle>Dashboard</SectionTitle>
      <DashOneSectionOne />
      <DashOneSectionTwo />
      <DashOneSectionThree />
    </Container>
  );
};

export default DashOne;
