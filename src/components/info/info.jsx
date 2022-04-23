import React from 'react';

import Cathederal from '../../assets/Church-interior.jpg';

const Info = () => (
  <section className="info" name="info">
    <div className="side-img-wrapper">
      <img src={Cathederal} alt="Catheral" className="side-img" />
    </div>
    <div className="info-main">
      <h1 className="info-main-title">
        Welcome to the abundant grace of god and penticostal gospel mission
        international
      </h1>
      <p className="info-main-text">
        We are christ agent for promoting the faith among God's chosen people,
        getting out accurate word on God and how to respond right to it
      </p>
      <h3 className="info-main-subtitle">Mission</h3>
      <p className="info-main-text">
        Our mission is to spread the power of optimisim through the gospel
      </p>
      <h3 className="info-main-subtitle">Vision</h3>
      <p className="info-main-text">
        Our vision is to raise hope by pointing the way to life abundant
      </p>
    </div>
  </section>
);

export default Info;
