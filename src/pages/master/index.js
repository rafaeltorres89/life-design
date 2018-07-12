import React, { Component } from 'react';
/* import './dist/css/mongeral.min.css'; */
import Header from '../../include/header';
import Footer from '../../include/navbar';
import NavBar from '../../include/footer';

class Master extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <NavBar />
        <h1>oi</h1>
        <Footer />
      </div>
    );
  }
}

export default Master;
