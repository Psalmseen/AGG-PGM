import React from 'react';

const YoutubeCard = ({ url }) => (
  <div className="youtube-card">
    <iframe
      width="300"
      height="300"
      src={`https://www.youtube.com/embed/${url.split('.be/')[1]}`}
      title="video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
);
export default YoutubeCard;
