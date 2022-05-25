import DashOneSectionOne from '../../components/DashOneSectionOne';
import DashOneSectionTwo from '../../components/DashOneSectionTwo';
import DashOneSectionThree from '../../components/DashOneSectionThree';
import { Container, SectionTitle } from './dashboard.Styles';

const Dashboard = () => {
  return (
    <Container>
      <SectionTitle>Dashboard</SectionTitle>
      <DashOneSectionOne />
      <DashOneSectionTwo />
      <DashOneSectionThree />
    </Container>
  );
};

export default Dashboard;
