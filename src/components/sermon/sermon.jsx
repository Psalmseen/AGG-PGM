import React from 'react';

import YoutubeCard from '../youtube-card/youtube-card';

import sermons from '../../utils/sermon-links';

const Sermon = () => (
  <section name="sermon" className="sermon">
    <div className="sermon__outline"></div>
    <h1 className="sermon__title">
      Abundant Grace of God and penticostal gospel mission international sermons
    </h1>
    <p className="sermon__title-text">
      Listen to Sermon from the
      <span className="sermon__title-text-main">
        {' '}
        abundant grace of God and Penticosal gospel mission International
      </span>{' '}
      altar
    </p>
    <div className="sermon__collection-wrapper">
      {sermons.map(({ url }, i) => (
        <YoutubeCard key={i} url={url} />
      ))}
    </div>

    <a
      href="https://www.youtube.com/channel/UCDFgVl9w5BAdIdoorRtD99Q"
      className="readmore"
    >
      Visit our youtube page for more sermons &#8594;
    </a>
  </section>
);

export default Sermon;
