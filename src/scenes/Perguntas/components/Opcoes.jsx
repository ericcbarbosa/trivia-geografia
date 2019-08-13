import React, { Component } from 'react';
import { connect } from 'react-redux';

import { disableRandomOptions } from '../../../helpers/disableRandomOptions';
import { playSound } from '../../../store/actions';

import style from './Opcoes.module.css';
import caminho from '../../../assets/images/board/caminho.png';

class PerguntasOpcoes extends Component {
  disabledOptions = false;

  /**
   * Caso o Jogador ative a dica, um novo array de opções é criado
   * Para que algumas opções sejam removidas.
   */
  getOptions = () => {
    const { options, usedHint = false } = this.props || {};

    if (!usedHint) {
      this.hasDisabledOptions = false;
      return options;
    };

    if (this.hasDisabledOptions) {
      return this.possibleOptions;
    }

    this.possibleOptions = disableRandomOptions(options);
    this.hasDisabledOptions = true;

    return this.possibleOptions;
  };

  getClassNames = (id, disabled = false) => {
    const { selectedOption, showQuestion } = this.props;

    const isSelected = selectedOption && selectedOption.id === id ? style.selected : '';

    const defaultClasses = `${style.listItem} ${style['listItem__'+id]} ${ showQuestion && style.in }`;

    return disabled ? `${style.disabled} ${defaultClasses}` : `${isSelected} ${defaultClasses}`;
  }

  setSelected = (selectedOption) => {
    this.props.playSound('CLICK');
    this.props.setSelectedOption(selectedOption);
  }

  renderQuestionOptions = () => {
    const possibleOptions = this.getOptions();

    return possibleOptions && possibleOptions.length && possibleOptions.map(({ id, text, correct, disabled }) => (
      <li
        id={ id }
        key={ id }
        className={ this.getClassNames(id, disabled) }
        disabled={ disabled }
        onClick={ () => this.setSelected({ id, correct }) }>
        { text }
      </li>
    ));
  }

  render() {
    return (
      <div className="perguntas__opcoes">
        <div className="perguntas__bar">
          <img src={ caminho } alt="bar"/>
        </div>
        <div className={ style.alternativas } alt="Alternativas">
          <ol type="A">
            { this.renderQuestionOptions() }
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ helper, game }) => {
  const { usedHint } = helper || {};
  const { showQuestion } = game || {};

  return {
    usedHint,
    showQuestion,
  };
};

const mapDispatchToProps = (dispatch) => ({
  playSound: (payload) => dispatch(playSound(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PerguntasOpcoes);