import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.css";
import { setCurrentAvatar, playSound } from "../../store/actions";
import { SoundPlayer } from "../../components";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ['','',''],
      lauch: false,
    };
  }

  updateAvatarSelected = (num) => {
    this.setState(state => {

      const selected = state.selected.map( (v, i) => {
        return state.selected[i] = i === num ? 'selected' : '';
      } );

      return {
        selected,
      };
    });
  };

  updateLauch = (lauch) => {
    this.setState({
      ...this.state,
      lauch,
    });
  }

  nextScene = () => {
    this.props.playSound('CLICK');

    this.updateLauch(true);

    setTimeout(() => this.props.playSound('QUESTION_IN'), 1400);
    setTimeout(() => this.props.history.push('/game'), 4700);
  };

  hasSelected = () => {
    return this.state.selected.filter(item => item === 'selected').length > 0;
  }

  getAvatarClassNames = (index) => {
    return `avatar avatar_bg${index + 1} avatar__content ${this.state.selected[index]} ${this.state.selected[index] === 'selected' && this.state.lauch && 'launch'}`;
  }

  renderAvatars = (avatars) => {
    return avatars.map((avatar, index) => (
      <div
        onClick={ () => this.chooseAvatar(index) }
        className={ this.getAvatarClassNames(index) }>
        <img
          src={ `./images/avatars/${ avatar.image }` }
          className={ `avatar-float avatar-float-${index + 1}` }
          id={ `avatar_${index + 1}` }
          alt={ avatar.title } />
      </div>
    ));
  }

  chooseAvatar = ( num ) => {
    this.props.playSound('CLICK');
    this.updateAvatarSelected(num);
    this.props.setCurrentAvatar( num+1 );
  };

  render() {
    return (
      <div className="avatarBg">
        <div className="wrapper-avatar">
          <div className="container">

            <SoundPlayer soundName="CLICK" volume={ 30 } />
            <SoundPlayer soundName="QUESTION_IN" />

            <div className="header">
              <h1> Escolha seu personagem</h1>
            </div>

            <div className="container">
              <div id="border-image" className="avatar__container">
                { this.renderAvatars(this.props.avatars) }
              </div>

              <div className="btn__container">
                <button
                  disabled={ !this.hasSelected() }
                  className={`btn btn__white-font ${!this.hasSelected() && 'disabled'}`}
                  onClick={ this.nextScene }>JOGAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// GET
const mapStateToProps = ({ game }) => {
  const { avatars, currentAvatar } = game || {};

  return {
    avatars,
    currentAvatar,
  };
};

// SET
const mapDispatchToProps = ( dispatch ) => ( {
  setCurrentAvatar: ( payload ) => dispatch( setCurrentAvatar( payload ) ),
  playSound: (payload) => dispatch( playSound(payload) ),
} );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( Avatar );