import React from "react";
import { Card, CardAvatar, CardInfo, Row } from "./dashOneSectionOne.Styles";
import { FaEye, FaRegHeart, FaShoppingCart, FaChartBar } from "react-icons/fa";

const DashOneSectionOne = () => {
  return (
    <Row>
      <Card>
        <CardAvatar>
          <div>
            <FaRegHeart />
          </div>
        </CardAvatar>
        <CardInfo>
          <div>
            <h3>
              $<span data-plugin="counterup">58,947</span>
            </h3>
            <p className="text">Total Revenue</p>
          </div>
        </CardInfo>
      </Card>

      <Card>
        <CardAvatar>
          <div>
            <FaShoppingCart />
          </div>
        </CardAvatar>
        <CardInfo>
          <div>
            <h3>
              $<span data-plugin="counterup">127</span>
            </h3>
            <p className="text">Today's Sales</p>
          </div>
        </CardInfo>
      </Card>

      <Card>
        <CardAvatar>
          <div>
            <FaChartBar />
          </div>
        </CardAvatar>
        <CardInfo>
          <div>
            <h3>
              $<span data-plugin="counterup">0.58</span>
            </h3>
            <p className="text">Conversion</p>
          </div>
        </CardInfo>
      </Card>

      <Card>
        <CardAvatar>
          <div>
            <FaEye />
          </div>
        </CardAvatar>
        <CardInfo>
          <div>
            <h3>
              $<span data-plugin="counterup">78.41K</span>
            </h3>
            <p className="text">Today's Visits</p>
          </div>
        </CardInfo>
      </Card>
    </Row>
  );
};

export default DashOneSectionOne;
