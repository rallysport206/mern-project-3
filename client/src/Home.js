import React, { Component } from 'react';
import Search from './planning/Search.js';
import HowItWorks from './planning/HowItWorks.js';
import About from './planning/About.js';


class Home extends Component {
  render(){
    return (
      <div className="Home">
        <Search />
        <HowItWorks />
        <About />
      </div>
    );
  }
}

export default Home;
