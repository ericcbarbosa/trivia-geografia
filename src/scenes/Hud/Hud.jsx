import React, { Component } from 'react';
import { connect } from "react-redux";

import { startGlobalTimer } from '../../store/actions';
import { Timer } from '../../components';

import './Hud.css';
import './Hud.responsive.css';
import tituloApoema from '../../assets/images/board/apoema-title.png';
import path from '../../assets/images/board/path.svg';
import sun from '../../assets/images/board/sun.svg';

class Hud extends Component {
  componentDidMount() {
    this.props.startGlobalTimer();
  }

  getAvatarThumb = () => {
    const { currentAvatar } = this.props || {};
    const { image } = currentAvatar || {};

    return image ? `images/avatars/${image}` : null;
  }

  getAvatarClassNames = () => {
    const { currentLevel } = this.props || {};
    const { id = 1 } = currentLevel || {};

    return `hud__avatar level-${ id }`;
  }

  getDoneLevels = (levels) => {
    return levels.map(level => {
      const { id, done, correct } = level;

      return { id, done, correct };
    });
  }

  getPlanetClassNames = (id, done, correct) => {
    const feedbackClass = {
      true: 'positive',
      false: 'negative',
    }

    return done
      ? `planet level-${id} ${feedbackClass[correct]}`
      : `planet level-${id}`;
  }

  renderPlanets(levels) {
    return levels.map(level => {
      const { id, title, image, done, correct } = level || {};

      return (
        <li className={ this.getPlanetClassNames(id, done, correct) } key={ id }>
          <div className="relative-container">
            <img
              src={ `images/levels/${image}` }
              alt={ title }/>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="wrapper-hud">
        <div className="nav nav__header">
          <img className="nav_bar_title" src={ tituloApoema } alt="Sistema Solar" />
        </div>

        <div className="main">
          <div className="section__body">

            <ul className="levels">
              { this.renderPlanets(this.props.levels) }
            </ul>

            <img
              src={ path }
              className="hud__planets"
              alt="Planetas" />

            <img
              src={ sun }
              className="hud__sun"
              alt="Sol" />

            <img
              src={ this.getAvatarThumb() }
              className={ this.getAvatarClassNames() }
              id="avatar"
              alt="Avatar" />
          </div>
        </div>

        <div className="footer-hud">
          <div className="section__timer">
            <Timer type="game"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game, timer }) => {
  const { currentLevel, currentAvatar, levels } = game || {};
  const { gameTimer } = timer || {};

  return {
      levels,
      currentLevel,
      currentAvatar,
      gameTimer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startGlobalTimer: () => dispatch(startGlobalTimer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hud);