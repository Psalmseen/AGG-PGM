import React from 'react';
import Carousel from '../image-carousel/image-carousel';

import Logo from '../../assets/woman_with_bible.jpg';
import Logo1 from '../../assets/John_3_16.jpg';

const Header = () => {
  const items = [
    {
      img: Logo,
      title: 'We love God we believe in god',
      text: 'If not for the love of God in our lives we would have been dead',
    },
    {
      img: Logo1,
      title: 'following jesus where ever we are',
      text: 'The fear of the lord is the begining of wisdom',
    },
  ];
  return (
    <section name="header" className="header">
      <Carousel items={items} />
    </section>
  );
};

export default Header;
