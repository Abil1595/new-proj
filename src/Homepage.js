import React from 'react';
import bg from './Images.svg';
import bg1 from './Vector.svg';

export default function Homepage() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={bg1} alt="Logo" />
          <div className="title">Economizing Futura</div>
        </div>
        <nav>
          <ul className="nav-links">
            <li>Block</li>
            <li>Technology</li>
            <li>Pricing</li>
            <li><button className="nav-button">Contact Us</button></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <div className="text-section">
          <h1 className="content1">Creative Solutions for a Brighter Future</h1>
          <p>
            Embrace a brighter future with our technology-driven solutions that enhance your business
            capabilities. We empower your success through innovation, helping you unlock new
            opportunities and stay ahead in a competitive landscape.
          </p>
          <button className="buttonnew">Contact Us</button>
        </div>
        <div className="image-section">
          <img src={bg} alt="Illustration" />
        </div>
      </div>
    </div>
  );
}
