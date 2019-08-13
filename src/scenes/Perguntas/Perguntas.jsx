import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Perguntas.css';

import {
  nextLevel,
  setFeedback,
  playSound,
} from '../../store/actions';

import {
  Feedback,
  Images,
  ImageModal,
  Opcoes,
  Hud,
} from './components';
import { SoundPlayer } from '../../components';

class Perguntas extends Component {
  state = {
    selectedOption: null,
    imageModal: {
      visible: false,
    },
  };

  setSelectedOption = (selectedOption = null, callback = null) => {
    return new Promise((resolve) => {
      this.setState({
        ...this.state,
        selectedOption,
      }, resolve());
    });
  };

  setImageModal = (imageModal) => {
    return new Promise((resolve) => {
      this.setState({
        ...this.state,
        imageModal,
      }, resolve());
    });
  }

  showImageModal = (imageData) => {
    this.setImageModal(imageData).then(() =>
      this.toggleImageModal(true)
    );
  }

  toggleImageModal = (visible) => {
    this.setState({
      ...this.state,
      imageModal: {
      ...this.state.imageModal,
        visible,
      },
    });
  }

  toggleFeedbackVisibility = (visible) => {
    const { feedback } = this.props;

    this.props.setFeedback({
      ...feedback,
      visible,
    });
  }

  showPerguntaFeedback = (visibilityTime = 3000) => {
    this.toggleFeedbackVisibility(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        this.toggleFeedbackVisibility(false);
        resolve();
      }, visibilityTime);
    });
  };

  configureFeedback = (feedbackType) => {
    const { feedback, feedbackTypes, messages } = this.props;

    const correct = (feedbackType === 'skipped' || feedbackType === 'timeout') ? false : feedbackType;
    const type = feedbackTypes[feedbackType];
    const message = messages[feedbackType];

    const payload = {
      ...feedback,
      correct,
      type,
      message,
    };

    this.props.setFeedback(payload);
  };

  handleFeedback = (feedbackType) => {
    return new Promise((resolve, reject) => {
      this.configureFeedback(feedbackType);

      if (feedbackType === 'notselected') {
        this.showPerguntaFeedback();
        reject();
      } else {
        const timeout = feedbackType === 'timeout' ? 5000 : undefined

        this.showPerguntaFeedback(timeout).then(() => resolve());
        this.playSoundFeedback(feedbackType);
      }
    });
  }

  playSoundFeedback = (type) => {
    console.log('type: ', type);
    const sounds = {
      true: () => this.props.playSound('QUESTION_POSITIVE'),
      false: () => this.props.playSound('QUESTION_NEGATIVE'),
      timeout: () => this.props.playSound('QUESTION_TIMEOUT'),
      skipped: () => this.props.playSound('QUESTION_SKIP'),
    };

    if (sounds[type]) sounds[type]();
  }

  buildPayload = (selectedOptionId, feedbackType = 'notselected') => {
    const {
      id,
      levelTimeSpent,
      usedHint,
      usedSkip,
    } = this.props;

    // Se for timeout, correct é falso. Se for skipped, correct é true.
    const correct = (feedbackType === 'timeout')
      ? false : feedbackType === 'skipped'
        ? true : feedbackType;

    return {
      id,
      correct,
      selectedOptionId,
      spentTime: levelTimeSpent,
      usedHint,
      usedSkip,
    };
  };

  nextLevel = (selectedOptionId, feedbackType) => {
    const payload = this.buildPayload(selectedOptionId, feedbackType);

    this.setSelectedOption(null).then(() => {
      this.handleFeedback(feedbackType).then(() => {
        this.props.goToNextLevel(payload);
      });
    });
  }

  onTimeOut = () => {
    this.nextLevel(null, 'timeout');
  }

  componentDidMount() {
    this.props.playSound('QUESTION_IN');
    console.log('QUESTION_IN')
  }

  render() {
    return (
      <div className={ `${ !this.props.showQuestion ? 'hidden' : 'visible' } perguntas__wrapper-perguntas` }>
        <SoundPlayer soundName="QUESTION_IN" />
        <SoundPlayer soundName="CLICK" volume={ 30 } />
        <SoundPlayer soundName="QUESTION_NEGATIVE" />
        <SoundPlayer soundName="QUESTION_POSITIVE" />
        <SoundPlayer soundName="QUESTION_SKIP" />
        <SoundPlayer soundName="QUESTION_TIMEOUT" />

        <div className={`perguntas__nav perguntas__nav__header ${ this.props.showQuestion && 'in' }`}>
          <h1>{ `${this.props.id}. ${this.props.title}` }</h1>
        </div>

        <div className="perguntas__main">
          <div className="perguntas__section__body">
            <Images
              images={ this.props.images }
              imageClicked={ this.showImageModal } />
            <Opcoes className="perguntas__opcoes"
              options={ this.props.options }
              selectedOption={ this.state.selectedOption }
              setSelectedOption={ this.setSelectedOption } />
          </div>
        </div>

        <Hud
          onTimeOut={ this.onTimeOut }
          onNextLevel={ this.nextLevel }
          selectedOption={ this.state.selectedOption }
          setSelectedOption={ this.setSelectedOption } />

        <Feedback { ...this.state.feedback } />

        <ImageModal { ...this.state.imageModal }
          onClose={ () => this.toggleImageModal(false) } />
      </div>
    )
  }
}

const mapStateToProps = ({ game, timer, helper, feedback: feedbackState }) => {
  const { levelTimer, levelTimeSpent } = timer || {}
  const { currentLevel, showQuestion } = game || {};
  const { question } = currentLevel || {};
  const { id, title, options = [], images = [] } = question || {};

  const { usedHint, usedSkip } = helper || {};
  const { visible, correct, type, types: feedbackTypes, message, messages } = feedbackState;
  const feedback = { visible, correct, type, message };

  return {
    showQuestion,
    id,
    title,
    options,
    images,
    levelTimer,
    levelTimeSpent,
    usedHint,
    usedSkip,
    feedback,
    feedbackTypes,
    messages,
  };
};

const mapDispatchToProps = (dispatch) => ({
  goToNextLevel: (payload) => dispatch(nextLevel(payload)),
  setFeedback: (payload) => dispatch(setFeedback(payload)),
  playSound: (payload) => dispatch(playSound(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Perguntas);
