import React, { Component } from 'react';
import { connect } from "react-redux";

import styles from './Game.module.css';
import soundOnImg from '../../assets/images/board/volume-up-solid.svg';
import soundOffImg from '../../assets/images/board/volume-mute-solid.svg';

import { Hud, Perguntas } from '../../scenes/';
import { EndGameFeedback, SoundPlayer } from '../../components';
import { setShowQuestion, startGame, playSound, muteSound } from '../../store/actions';

class Game extends Component {
  componentDidMount() {
    this.props.startGame();
    this.props.playSound('SOUND_TRACK');
  }

  toggleMute = () => {
    this.props.muteSound(!this.props.muted)
  }

  render() {
    return (
      <div className={ styles.Game }>
        <SoundPlayer soundName="SOUND_TRACK" volume={ 20 } loop/>
        <button
          type="button"
          className={ styles.mute_button }
          onClick={ this.toggleMute }>
          <img
            className={ `${styles.mute_button__img} ${this.props.muted ? styles.mute_button__img__off : styles.mute_button__img__on}` }
            src={ this.props.muted ? soundOffImg : soundOnImg }
            alt="Mute Sound"/>
        </button>
        <Hud />
        <Perguntas />
        <EndGameFeedback />
      </div>
    );
  }
}

const mapStateToProps = ({ game, sounds }) => {
  const { showQuestion } = game || {};
  const { muted } = sounds || {};

  return {
    showQuestion,
    muted,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setShowQuestion: (show) => dispatch(setShowQuestion(show)),
  startGame: () => dispatch(startGame()),
  playSound: (payload) => dispatch(playSound(payload)),
  muteSound: (payload) => dispatch(muteSound(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);