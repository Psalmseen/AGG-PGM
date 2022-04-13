import React, { useState } from 'react';

import {
  FaChurch,
  FaBible,
  FaPray,
  FaPrayingHands,
  FaGlassCheers,
  FaCross,
} from 'react-icons/fa';

import { AiFillFire } from 'react-icons/ai';

const Service = () => {
  const [services, setServices] = useState([
    {
      title: 'Sunday Service',
      icon: <FaChurch />,
      date: 'Sundays',
      time: '8:45am - 11:45am',
      details:
        'Come and experience the powerful presence of the living God as we worship God together in his presence.',
    },
    {
      title: 'Bible Study',
      icon: <FaBible />,
      date: 'Mondays',
      time: '6:00pm - 7:30pm',
      details:
        'Unto us it is given to know the mysteries. Come lets uncover the Mystery of the  kingdom as we study the bible together.',
    },
    {
      title: 'Prayer Meeting',
      icon: <FaPrayingHands />,
      date: 'Wednesdays',
      time: '6:00pm - 7:30pm',
      details:
        "God is the only one that can profer solution to every problem. Come let's take it to God in prayer together.",
    },
    {
      title: 'Night Vigil',
      icon: <FaPray />,
      date: '3rd Fridays',
      time: '11:30pm - 4:00am',
      details:
        'As Jacob wrestled with angels alone in the nigth and God blessed him, so come and wrestle and recieve your blessing as you join us in our night vigil.',
    },
    {
      title: 'Holy Communion',
      icon: <FaGlassCheers />,
      date: '1st Sundays',
      time: '(or otherwise announced)',
      details:
        'John 6:53 "Then Jesus said unto them, verily, verily I say unto you, Except you eat the flseh of the son of man, and drink his blood, ye have no life in you". So come and partake in the communion service as a mark of your convenant with God.',
    },
    {
      title: 'Evangelism',
      icon: <FaCross />,
      date: 'Saturdays',
      time: '4:00pm - 6:30pm',
      details:
        "We are saved to serve. Let's perform the task of the great commission by evanglizing to others who have not known Christ.",
    },
    {
      title: 'Mission Outreach',
      icon: <AiFillFire />,
      date: '3rd Sundays of every quarter',
      time: '',
      details:
        'Through this progaram we reach out to missionaries and visit villages for crusade. We reach out to orphanages, hospitals, prisons and other places where we see the need for spiritual interaction.',
    },
  ]);

  return (
    <section name="services" className="services">
      <div className="services__outline" />
      <h1 className="services__title">
        Aboundant Grace of God and penticostal gospel mission international
        services
      </h1>
      <p className="services__title-text">
        Our church services at the{' '}
        <span className="services__title-text-main">
          aboundant grace of God and Penticosal gospel mission International
        </span>{' '}
        are as follows
      </p>
      <div className="services__collection-wrapper">
        {services.map(({ title, icon, date, time, details }) => (
          <div key={title} className="service">
            <div className="icon">{icon} </div>
            <h3 className="service__title">{title}</h3>
            <p className="service__time">{date + '  ' + time}</p>
            <p className="service__details">{details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
