import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from 'moment';

import styles from './Timer.module.css';
import timerImage from '../../assets/images/board/hud-timer.svg';

class Timer extends Component {
  getFormattedTimer = () => {
    const { type = 'level', levelTimer, gameTimer } = this.props || {};

    const timer = {
      level: levelTimer,
      game: gameTimer,
    }

    return Moment(timer[type]).format('mm:ss');
  };

  timeout = () => {
    const { type = 'level', levelTimer, onTimeOut } = this.props || {};

    if (type === 'level' && levelTimer === 0 && onTimeOut) {
      onTimeOut();
    }
  };

  render() {
    this.timeout();

    return (
      <div className={styles.Timer}>
        <p className={ styles.text }>{ this.getFormattedTimer() }</p>
        <img className={ styles.image } src={ timerImage } alt="Timer" />
      </div>
    );
  }
};

const mapStateToProps = ({ timer }) => {
  const { gameTimer, levelTimer } = timer || {};

  return {
    gameTimer,
    levelTimer,
  };
};

export default connect(
  mapStateToProps,
)(Timer);