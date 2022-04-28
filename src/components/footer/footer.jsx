import React from 'react';

import { SiMinutemailer } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { BiChurch } from 'react-icons/bi';

const Footer = () => (
  <section name="footer" className="contact">
    <div className="contact__outline" />
    <h1 className="contact__title"> Contact Us</h1>
    <div className="contact__title-text">
      You can reach us through any of the following means
    </div>
    <div className="contact__body">
      <div className="contact__body-details">
        <div className="contact__body-card">
          <BiChurch className="contact__body-icon" />
          <h2 className="contact__body-card-title">Address</h2>
          <p className="contact__body-card-details">
            Behind Joy of salvation celectial church Koroduma Nasarawa state
            Nigeria
          </p>
        </div>
        <div className="contact__body-card">
          <BsTelephoneFill className="contact__body-icon" />
          <h2 className="contact__body-card-title">Contact Number</h2>
          <p className="contact__body-card-details">+234 703 454 0259</p>
        </div>
        <div className="contact__body-card">
          <SiMinutemailer className="contact__body-icon" />
          <h2 className="contact__body-card-title">Email Address</h2>
          <p className="contact__body-card-details">Aggpgmi@gmail.com</p>
        </div>
      </div>
      <form action="" className="card__body-form">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea
          name=""
          placeholder="Message"
          id=""
          cols="20"
          rows="5"
        ></textarea>
        <button className="contact__btn"> send message</button>
      </form>
    </div>
  </section>
);

export default Footer;
