import React from 'react';

import YoutubeCard from '../youtube-card/youtube-card';

import sermons from '../../utils/sermon-links';

const Sermon = () => (
  <section name="sermon" className="sermon">
    <div className="sermon__outline"></div>
    <h1 className="sermon__title">
      Aboundant Grace of God and penticostal gospel mission international
      sermons
    </h1>
    <p className="sermon__title-text">
      Listen to Sermon from the
      <span className="sermon__title-text-main">
        {' '}
        aboundant grace of God and Penticosal gospel mission International
      </span>{' '}
      altar
    </p>
    <div className="sermon__collection-wrapper">
      {sermons.map(({ url }) => (
        <YoutubeCard url={url} />
      ))}
    </div>
  </section>
);

export default Sermon;
