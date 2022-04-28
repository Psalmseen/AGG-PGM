import React from 'react';

const Donation = () => (
  <section name="donation" className="donation">
    <div className="donation__outline"></div>
    <h1 className="donation__title">Mission needs our help</h1>
    <div className="donate__container">
      <h1 className="donate__title">Partner with us</h1>
      <p className="donate__text">
        We normally embark on mission, there are some field we normally go to
        for mission work, evangelism and trying to reach the unreached. <br />
        We have some missionaries we do engage for mission work and all these
        needs finance. <br /> We therefore solicite for your donation to enable
        us successfuly carry out this work.
      </p>
      <div className="bank-details">
        <span className="account-info">account Name </span> Abundant grace of
        god and penticostal gospel mission int.
        <span className="account-info">account Number</span> 2033131722
        <span className="account-info">Bank</span> First bank{' '}
      </div>
    </div>
  </section>
);

export default Donation;
