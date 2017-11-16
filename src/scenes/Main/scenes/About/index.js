import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import ParticleBackground from '../../components/Background';

import style from './style.css';

class About extends Component {
  render() {
    return (
      <section>
        <div className={style.app}>
        <ParticleBackground />
          <Link to="/">
            <button>Home Page</button>
          </Link>
        </div>
      </section>
    );
  }
}

About.contextTypes = {
  router: PropTypes.object.isRequired
};

export default About;
