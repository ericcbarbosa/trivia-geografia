import React, {Component}from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

import { SoundPlayer } from '../../components';

import styles from './EndGameFeedback.module.css';
import endgamePositiveImage from '../../assets/images/board/endgame-positive.svg';
import endgameNegativeImage from '../../assets/images/board/endgame-negative.svg';
import { playSound } from '../../store/actions';

class EndGameFeedback extends Component {
  getFeedbackClassNames = () => {
    return `${styles.EndGameFeedback } ${!this.props.showEndGame && styles.hidden}`;
  }

  getCorrectAnswerCount = (levels) => {
    return levels.filter(level => level.correct === true).length;
  }

  getCorrectAnswersPercentage = (levels) => {
    const correctAnswers = this.getCorrectAnswerCount(levels);

    return correctAnswers * 100 / levels.length;
  }

  getFeedbackImage = () => {
    const { levels } = this.props || {};

    return this.getCorrectAnswersPercentage(levels) > 50
      ? endgamePositiveImage
      : endgameNegativeImage;
  }

  playFeedbackSound = () => {
    const { levels } = this.props || {};

    return this.getCorrectAnswersPercentage(levels) > 50
      ? this.props.playSound('END_GAME_POSITIVE')
      : this.props.playSound('END_GAME_NEGATIVE')
  }

  getFeedbackMessage = () => {
    const { levels, gameTimer } = this.props || {};

    const percentage = this.getCorrectAnswersPercentage(levels);
    const timeSpent = Moment(gameTimer).format('mm:ss');

    const endText = percentage > 50
    ? 'Parabéns!!'
    : <span className={ styles.text }>Sinto muito,<br/>tente novamente!!</span>;

    return (
      <>
        Você fez<br/>
        { percentage }%<br/>
        em<br/>
        { timeSpent }<br/>
        { endText }
      </>
    );

  }

  render() {
    if (this.props.showEndGame) this.playFeedbackSound();

    return (
      <div className={ this.getFeedbackClassNames() }>
        <SoundPlayer soundName="END_GAME_NEGATIVE" />
        <SoundPlayer soundName="END_GAME_POSITIVE" />

        <div className={ styles.relativeContainer }>
          <div className={`${styles.splitter} ${styles.textContainer}`}>
            <div className={styles.centered}>
              <h1 className={ styles.title }>{ this.getFeedbackMessage() }</h1>
            </div>
          </div>
          <div className={`${styles.splitter} ${styles.imageContainer}`}>
            <div className={styles.centered}>
              <img src={ this.getFeedbackImage() } className={styles.img} alt="Parabens" />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

const mapStateToProps = ({ game, timer }) => {
  const { showEndGame, levels } = game || {};
  const { gameTimer } = timer || {};

  return {
    showEndGame,
    levels,
    gameTimer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  playSound: (payload) => dispatch(playSound(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EndGameFeedback);
