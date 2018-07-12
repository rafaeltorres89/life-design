import React, { Component } from 'react';

import Header from '../../include/header';
import NavBar from '../../include/navbar';
import Aside from '../../include/aside';
import Footer from '../../include/footer';

import '../../dist/css/mongeral.min.css';

class Master extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <NavBar />
        <Aside />
        <Footer />
      </div>
    );
  }
}

export default Master;
