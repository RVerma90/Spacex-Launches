import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './style.css';

import LazyLoad from 'react-lazyload';

import axios from 'axios';
import ReactPlayer from 'react-player';

import Carousel from 'nuka-carousel';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      url: null,
      playing: true,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,    
      launches: []
    }
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v1/launches/latest')
      .then(res => {
        console.log(res.data);
        const launches = res.data;
        this.setState({
          // launches: res.data,
          launches: this.state.launches.concat([{ ...res.data }])
        });
      })
  }
  
  clicker() {
    console.log(this.state.launches);
  }

  render() {
    return (
      <section className={style.hero}>
        <div className={style.app}>

          {
            this.state.launches.reverse().map((launch) => {
              return (
                <div className={style.launchCard}>  
                  <img className={style.missionPatch} src={launch.links.mission_patch} />
                  <h1 className={style.appTitle}>{launch.rocket.rocket_name} - Launch {launch.flight_number} </h1>
                    {<ReactPlayer className={style.reactPlayer} url={launch.links.video_link} controls={true} />}
                  <div className={style.launchCardText}>
                    
                    <p>{launch.details}</p>
                    <p>Launch Success {launch.launch_success}</p>
                    <p>Land Success {launch.land_success}</p>
                  </div>
                </div>  
              )
            })
          }

          <Link to="/about">
            <button>Spacex</button>
          </Link>
        </div>
      </section>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Home;
