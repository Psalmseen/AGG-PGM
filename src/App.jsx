import React from 'react';

import Nav from './components/navigation/navigation';
import Header from './components/header/header';
import Info from './components/info/info';
import Service from './components/services/services';
import Sermon from './components/sermon/sermon';
import Event from './components/events/events';
import Donation from './components/donation/donation';
import Footer from './components/footer/footer';

const App = () => (
  <div>
    <Nav />
    <Header />
    <Info />
    <Service />
    <Sermon />
    <Event />
    <Donation />
    <Footer />
  </div>
);

export default App;
