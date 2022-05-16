import { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { SidebarMenu, SidebarNav } from "./sidebar.Styles";
import { Link } from "react-router-dom";

import { StoreContext } from "../../hooks/contexts/StoreContext";

const Sidebar = () => {
  const { isShow } = useContext(StoreContext);

  return (
    <SidebarMenu isShow={isShow}>
      <SidebarNav>
        <div>
          <Link to="/" className="nav-logo">
            <FaIcons.FaHome className="nav-logo-icon" />
            <span className="nav-logo-name"> Home</span>
          </Link>
          <div className="nav-list">
            <Link to="/dashboard" className="nav-link active">
              <FaIcons.FaTachometerAlt className="nav-link-icon" />
              <span className="nav-link-name">Dashboard</span>
            </Link>

            <Link to="/hotel" className="nav-link">
              <FaIcons.FaHotel className="nav-link-icon" />
              <span className="nav-link-name">Hotel</span>
            </Link>

            <Link to="/gallery" className="nav-link">
              <FaIcons.FaImage className="nav-link-icon" />
              <span className="nav-link-name">Hotel</span>
            </Link>

            <Link to="/transaction" className="nav-link">
              <FaIcons.FaCreditCard className="nav-link-icon" />
              <span className="nav-link-name">Transaction</span>
            </Link>
          </div>
        </div>
        <Link to="/logout" className="nav-link">
          <FaIcons.FaSignOutAlt className="nav-link-icon" />
          <span className="nav-link-name"> Logout</span>
        </Link>
      </SidebarNav>
    </SidebarMenu>
  );
};

export default Sidebar;
