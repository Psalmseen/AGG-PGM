import React, { useState } from 'react';

import img from '../../assets/event.jpg';

const Event = () => {
  const [event, setEvent] = useState([]);

  return (
    <section name="events" className="events">
      <div
        className="event-header-background"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="events__outline"> Events </div>
        <div className="events__title"> Upcoming Events</div>
      </div>
      {event.length > 0 ? (
        'event'
      ) : (
        <div className="noEvent"> No upcoming event</div>
      )}
    </section>
  );
};

export default Event;
