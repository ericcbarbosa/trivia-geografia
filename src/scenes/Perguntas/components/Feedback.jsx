import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Feedback.css';
import timeoutImage from '../../../assets/images/board/feedback-timeout.svg'

class Feedback extends Component {
  toggleVisibility = (visible) =>
    `PerguntaFeedback ${ visible ? '' : 'hidden' }`;

  getPerguntaFeedbackClass = (type) =>
    `PerguntaFeedback__message ${type}`;

  getPerguntaFeedbackText = (type) => {
    return this.props.messages[type];
  }

  getTimeoutFeedback() {
    return (
      <>
        <p><img className="PerguntaFeedback__image" src={ timeoutImage } alt="Timeout"/></p>
        <p>Que pena, você<br/>esgotou o seu<br/>tempo!!</p>
      </>
    );
  }

  render() {
    const { visible, type } = this.props;

    return (
      <div className={ this.toggleVisibility(visible) }>
        <div className={ this.getPerguntaFeedbackClass(type) }>
          {
            type === 'timeout'
              ? this.getTimeoutFeedback()
              : this.getPerguntaFeedbackText(type)
          }
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ feedback }) => {
  const {
    visible,
    correct,
    type,
    types,
    message,
    messages,
   } = feedback || {}

  return {
    visible,
    correct,
    type,
    types,
    message,
    messages,
  };
};

export default connect(
  mapStateToProps,
)(Feedback);
