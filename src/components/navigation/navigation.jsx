import React from 'react';

import { Link } from 'react-scroll';

import Logo from '../../assets/agg-pgm.png';

const Nav = () => (
  <section className="nav" name="navigation">
    <div className="logo-container">
      <img src={Logo} alt="logo" className="logo" />
    </div>
    <nav className="nav-list">
      <Link activeClass="active" spy={true} to="header" smooth={true}>
        Home
      </Link>
      <Link activeClass="active" spy={true} to="info" smooth={true}>
        About
      </Link>
      <Link activeClass="active" spy={true} to="services" smooth={true}>
        Services
      </Link>
      <Link activeClass="active" spy={true} to="sermon" smooth={true}>
        Sermon
      </Link>
      <Link activeClass="active" spy={true} to="events" smooth={true}>
        Events
      </Link>
      <Link activeClass="active" spy={true} to="donation" smooth={true}>
        Donation
      </Link>
      <Link activeClass="active" spy={true} to="footer" smooth={true}>
        Contact us
      </Link>
    </nav>
  </section>
);

export default Nav;
