import DashOneSectionOne from "../../components/DashOneSectionOne";
import DashOneSectionTwo from "../../components/DashOneSectionTwo";
import DashOneSectionThree from "../../components/DashOneSectionThree";
import { Container, SectionTitle } from "./home.Styles";

const Home = () => {
  return (
    <Container>
      <SectionTitle>Dashboard</SectionTitle>
      <DashOneSectionOne />
      <DashOneSectionTwo />
      <DashOneSectionThree />
    </Container>
  );
};

export default Home;
