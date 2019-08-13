import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import { playSound, stopSound } from '../../store/actions';

class SoundPlayer extends Component {
  getSound = (soundName = false) => {
    const { soundsList = {} } = this.props || {};

    return soundName && soundsList[soundName]
      ? `sounds/${soundsList[soundName]}`
      : null
  }

  render() {
    const {
      playingSounds,
      soundName,
      muted,
      volume = 100,
      loop = false,
    } = this.props || {};

    return playingSounds.length > 0 && playingSounds.map(playingSound => {
      if (playingSound === soundName) {
        const soundProps = {
          url: this.getSound(playingSound),
          playStatus: Sound.status.PLAYING,
          loop,
          volume: muted ? 0 : volume,
          onFinishedPlaying: () => this.props.stopSound(soundName),
        };

        return <Sound { ...soundProps } key={ playingSound } />;
      }

      return false;
    });
  }
}

const mapStateToProps = ({ sounds }) => {
  const { sounds: soundsList, muted, playingSounds } = sounds || {};

  return {
    soundsList,
    muted,
    playingSounds,
  };
};

const mapDispatchToProps = (dispatch) => ({
  playSound: (payload) => dispatch(playSound(payload)),
  stopSound: (payload) => dispatch(stopSound(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SoundPlayer);