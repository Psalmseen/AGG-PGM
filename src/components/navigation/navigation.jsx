import React from 'react';

import { Link } from 'react-scroll';

import Logo from '../../assets/agg-pgm.png';

const Nav = () => {
  const toggleMobile = (toggle) => {
    const element = document.querySelector('#toggleMobile');

    if (toggle === 'toggle') {
      element.classList.toggle('mobile__toggle--open');
      return;
    }
    element.classList.remove('mobile__toggle--open');
  };
  return (
    <section className="nav" name="navigation">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div
        className="mobile__toggle "
        onClick={() => toggleMobile('toggle')}
        id="toggleMobile"
      >
        mobile toggle
      </div>
      <nav className="nav-list">
        <Link
          activeClass="active"
          onClick={toggleMobile}
          spy={true}
          to="header"
          smooth={true}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          onClick={toggleMobile}
          spy={true}
          to="info"
          smooth={true}
        >
          About
        </Link>
        <Link
          activeClass="active"
          onClick={toggleMobile}
          spy={true}
          to="services"
          smooth={true}
        >
          Services
        </Link>
        <Link
          activeClass="active"
          onClick={toggleMobile}
          spy={true}
          to="sermon"
          smooth={true}
        >
          Sermon
        </Link>
        <Link
          activeClass="active"
          onClick={toggleMobile}
          spy={true}
          to="events"
          smooth={true}
        >
          Events
        </Link>
        <Link
          activeClass="active"
          onClick={toggleMobile}
          spy={true}
          to="donation"
          smooth={true}
        >
          Donation
        </Link>
        <Link
          activeClass="active"
          onClick={toggleMobile}
          spy={true}
          to="footer"
          smooth={true}
        >
          Contact us
        </Link>
      </nav>
    </section>
  );
};

export default Nav;
