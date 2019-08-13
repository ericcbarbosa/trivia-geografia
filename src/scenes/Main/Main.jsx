import React, { Component } from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadGame } from '../../store/actions';

import './Main.css';

import {
  Avatar,
  Game,
  Capa,
  Hud,
  Perguntas,
} from '../../scenes/';

import Intro from '../../scenes/Intro';


class Main extends Component {
  componentDidMount() {
    this.props.loadGame();
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={ Capa } />
        <Route path="/intro" exact component={ Intro } />
        <Route path="/avatar" exact component={ Avatar } />
        <Route path="/game" exact component={ Game } />
        <Route path="/hud" exact component={ Hud } />
        <Route path="/pergunta" exact component={ Perguntas } />
      </Router>
    )
  }
}

const mapStateToProps = (store) => {
  const { game } = store || {};

  return {
    game,
  }
};

const mapDispatchToProps = (dispatch) => ({
  loadGame: () => dispatch(loadGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);