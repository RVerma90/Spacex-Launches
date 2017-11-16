import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';

import style from './style.css';

import axios from 'axios';
import ReactPlayer from 'react-player';

class LaunchCard extends Component {

    constructor(props) {
        super(props);

        this.launch = props.launch;

        this.url = props.url;
        this.playing = props.playing;
        this.volume = props.volume;
        this.muted = props.muted;
        this.played = props.played;
        this.loaded = props.loaded;
        this.duration = props.duration;
        this.playbackRate = props.playbackRate;
        this.loop = props.loops;
    }

    render(props) {
        return (
            <div className={style.launchCard}>  
                  <h1 className={style.appTitle}>{this.launch.rocket.rocket_name} - Launch {launch.flight_number} </h1>
                    <ReactPlayer className={style.reactPlayer} url={launch.links.video_link} controls={true} />
                    <input
                    type='range' min={0} max={100} step='any'
                    value={this.played}
                    onMouseDown={this.onSeekMouseDown}
                    onChange={this.onSeekChange}
                    onMouseUp={this.onSeekMouseUp}
                  />
                  <div className={style.launchCardText}>
                    <p>Launch Success {launch.launch_success}</p>
                    <p>Land Success {launch.land_success}</p>
                  </div>
            </div>
        )
    }
}


LaunchCard.propTypes = {
  noteContent: PropTypes.string
}

export default LaunchCard;