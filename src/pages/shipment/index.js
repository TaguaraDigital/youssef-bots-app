import { Container } from './shipment.Styles';

import { shipmentsData } from '../../assets/data/shipmentData';
import ShipmentCard from '../../components/shipingCard';
import ShipmentHeader from '../../components/shipmentHeader';

const Shipment = () => {
  return (
    <Container>
      <ShipmentHeader />
      <h1>Manage Shipments</h1>
      {shipmentsData.map((shipment) => {
        return (
          <ShipmentCard key={shipment.shipment_number} shipment={shipment} />
        );
      })}
    </Container>
  );
};

export default Shipment;
