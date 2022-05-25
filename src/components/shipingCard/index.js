import React from 'react';
import { Container, GridContainer } from './shipmentCard.Styles';

const ShipmentCard = ({ shipment }) => {
  return (
    <Container>
      <GridContainer>
        <div>
          <div className="group">
            <span>Shipment Number</span>
            <p>{shipment.shipment_number}</p>
          </div>
          <div className="group">
            <span>Freight Bill Number</span>
            <p>{shipment.bill}</p>
          </div>
          <div className="group">
            <span>Status</span>
            <p>{shipment.status}</p>
          </div>
        </div>
        <div>
          <div className="group">
            <span>Origin</span>
            <p>{shipment.origin}</p>
          </div>
        </div>
        <div>
          <div className="group">
            <span>Transportation Provider</span>
            <p>{shipment.provider}</p>
          </div>
          <div className="group">
            <span>Expented Ship Date</span>
            <p>{shipment.expented_ship_date}</p>
          </div>
        </div>
        <div>
          <div className="group">
            <span>Destination</span>
            <p>{shipment.destination}</p>
          </div>
        </div>
        <div>
          <div className="group">
            <span>Term</span>
            <p>{shipment.terms}</p>
          </div>
          <div className="group">
            <span>Total Weight</span>
            <p>{shipment.total_weight}</p>
          </div>
          <div className="group">
            <span>Qty</span>
            <p>{shipment.qty}</p>
          </div>
        </div>
        <div>
          <div className="group right">
            <span>Cost</span>
            <p className="big"> US$ {shipment.cost}</p>
          </div>
          <button>Edit</button>
        </div>
      </GridContainer>
    </Container>
  );
};

export default ShipmentCard;
