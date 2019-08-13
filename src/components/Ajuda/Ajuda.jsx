import React, { Component } from 'react';
import { connect } from 'react-redux';

import ajudaImg from '../../assets/images/board/hud-tips.svg';
import styles from './Ajuda.module.css';

import Dica from './Dica';
import Pular from './Pular';

import {
  useHint,
  useSkip,
  decrementHints,
  decrementSkips,
  showHelpers,
  playSound,
} from '../../store/actions';

class Ajuda extends Component {
  toggleHelpers = (visible) => {
    this.props.playSound('CLICK');
    this.props.toggleHelpers(visible || !this.props.showHelpers);
  }

  getContainerClassNames = () => {
    return this.props.showHelpers
      ? `${styles.helpers} ${styles.show}`
      : `${styles.helpers}`;
  }

  callUseHint = () => {
    this.props.useHint();
    this.props.decrementHints();
    this.props.setSelectedOption(null);
    this.props.toggleHelpers(false);
  }

  callUseSkip = () => {
    this.props.useSkip();
    this.props.decrementSkips();
    this.props.toggleHelpers(false);
    this.props.onNextLevel('skipped');
  }

  isDisabled = () => {
    const { hints, skips } = this.props || {};

    return (hints === 0 && skips === 0);
  }

  render() {
    const { hints, skips } = this.props;

    return (
      <div className={ styles.Ajuda }>
        <button
          className={ styles.button }
          onClick={ () => this.toggleHelpers() }
          disabled={ this.isDisabled() }>
          <img src={ ajudaImg } alt="Botão de Ajuda"/>
        </button>
        <div className={ this.getContainerClassNames() }>
        { (hints > 0 || skips > 0) && (
          <>
            {
              hints > 0 && (
                <>
                  <Dica onClick={ this.callUseHint } />
                  <div className={ styles.pipe }></div>
                </>
              )
            }
            { skips > 0 && <Pular onClick={ this.callUseSkip } /> }
            <div className={ styles.rightArrow }></div>
          </>
        ) }
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ helper }) => {
  const { hints, skips, showHelpers } = helper || {};

  return {
    hints,
    skips,
    showHelpers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleHelpers: (payload) => dispatch(showHelpers(payload)),
  useHint: () => dispatch(useHint(true)),
  useSkip: () => dispatch(useSkip(true)),
  decrementHints: () => dispatch(decrementHints()),
  decrementSkips: () => dispatch(decrementSkips()),
  playSound: (payload) => dispatch(playSound(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ajuda);