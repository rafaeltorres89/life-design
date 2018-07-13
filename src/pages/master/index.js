import React, { Component } from 'react';

import Header from '../../include/header';
import Sidebar from '../../include/sidebar';
import Aside from '../../include/aside';
import Footer from '../../include/footer';

import '../../dist/css/mongeral.min.css';

class Master extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Sidebar />
        <Aside />
        <Footer />
      </div>
    );
  }
}

export default Master;
