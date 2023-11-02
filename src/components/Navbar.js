import React from "react";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="titleName">
        <span>Opsight</span>
        <span className="green">.AI</span>
      </div>
      <div className="links">
        <div className="navLink">
          <span>Solutions</span> <i class="fa-solid fa-chevron-down"></i>
          <div className="linkOpen">
            <div className="subLinks">Performance Monitoring (OEEE)</div>
            <div className="subLinks">Data Driven Insights</div>
            <div className="subLinks">Condition Monitoring</div>
            <div className="subLinks">Predictive Analytics</div>
          </div>
        </div>
        <div className="navLink">
          <span>Products</span> <i class="fa-solid fa-chevron-down"></i>
          <div className="linkOpen">
            <div className="subLinks">IIOT Gateway</div>
            <div className="subLinks">Edge Computing Hardware</div>
          </div>
        </div>
        <div className="navLink">
          <span>Resources</span>
        </div>
        <div className="navLink">
          <span>About us</span> <i class="fa-solid fa-chevron-down"></i>
          <div className="linkOpen">
            <div className="subLinks">Vision</div>
            <div className="subLinks">Our mission statement</div>
            <div className="subLinks">Team Details</div>
          </div>
        </div>
        <div className="navLink">
          <span>Contact us</span>
        </div>
      </div>

      <div className="needHelp">
        <i class="fa-solid fa-envelope"></i>
        <div className="mailDetaials">
          <span> Any Query ?</span>
          <a href="mailto:connect@opsight.ai">connect@opsight.ai</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
