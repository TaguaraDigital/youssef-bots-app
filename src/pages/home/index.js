import { Container, SectionTitle } from './home.Styles';

import { shipmentsData } from '../../assets/data/shipmentData';
import ShipmentCard from '../../components/shipingCard';
import HomeHeader from '../../components/homeHeader';

const Home = () => {
  return (
    <Container>
      <SectionTitle>Home</SectionTitle>
      <HomeHeader />
      <h1>Manage Shipments</h1>
      {shipmentsData.map((shipment) => {
        return (
          <ShipmentCard key={shipment.shipment_number} shipment={shipment} />
        );
      })}
    </Container>
  );
};

export default Home;
