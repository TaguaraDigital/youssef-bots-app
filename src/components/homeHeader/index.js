import { headerData } from '../../assets/data/shipmentData';
import { Card, CardAvatar, CardInfo, Row } from './homeHeader.Styles';

const HomeHeader = () => {
  return (
    <Row>
      {headerData.map((data) => {
        return (
          <Card key={data.id}>
            <CardAvatar>
              <div>{data.icon}</div>
            </CardAvatar>
            <CardInfo>
              <div>
                <h4>
                  $<span data-plugin="counterup">{data.amount}</span>
                </h4>
                <p className="text">{data.title}</p>
              </div>
            </CardInfo>
          </Card>
        );
      })}
    </Row>
  );
};

export default HomeHeader;
