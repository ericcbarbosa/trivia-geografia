import React, { Component } from 'react';

import '../Perguntas.css';

import {
  Ajuda,
  Timer,
} from '../../../components';

export default class PerguntaHud extends Component {
  disableTimer() {
    document.getElementById("timer").style.visibility = "hidden";
  }

  onTimeOut = () => {
    this.props.onTimeOut();
  }

  onNextLevel = (type) => {
    const { selectedOption } = this.props;

    // O Player usou a opção PULAR
    if (type === 'skipped') {
      this.props.onNextLevel(null, 'skipped');
    }

    // Nenhuma opção foi selecionada
    else if (!selectedOption && type !== 'skipped') {
      this.props.onNextLevel(null, 'notselected');
    }

    else {
      const { id, correct } = selectedOption || {};

      this.props.onNextLevel(id, correct);
    }
  }

  render() {
    return (
      <div className="perguntas__footer-hud">
        <div className="perguntas__section__timer">
          {/* <img src={ timer } alt="Contador" /> */}
          <Timer onTimeOut={ this.onTimeOut } />
        </div>

        <div className="perguntas__section__answer">
          <button
            className={ `perguntas__btn__answer ${!this.props.selectedOption ? 'disabled' : ''}` }
            disabled={ !this.props.selectedOption }
            onClick={ this.onNextLevel }>
            RESPONDER
          </button>
        </div>

        <div className="perguntas__section__tips">
          <Ajuda
            setSelectedOption={ this.props.setSelectedOption }
            onNextLevel={ this.onNextLevel } />
        </div>
      </div>
    );
  }
}
