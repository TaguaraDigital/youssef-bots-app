import Dashboard from "../../components/DashOne";
import Sidebar from "../../components/sidebar";
import { HomeContainer } from "./home.Styles";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Sidebar />
        <Dashboard />
      </HomeContainer>
    </>
  );
};

export default Home;
