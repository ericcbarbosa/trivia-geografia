import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SoundPlayer } from '../../components';
import { playSound } from '../../store/actions';

import styles from "./Capa.module.css";
import iniciar from "../../assets/images/home/botao-iniciar.svg";
import creditos from "../../assets/images/home/botao-creditos.svg";
import logo from "../../assets/images/home/leb-logo.svg";
import background from '../../assets/images/home/imagem.svg';

class Capa extends Component {
  state = {
    showCredits: false,
    playSound: false,
  }

  openCreditsModal = () => {
    this.props.playSound('CLICK');

    this.setState({
      ...this.state,
      showCredits: true,
      playSound: true,
    });
  };

  closeCreditsModal = () => {
    this.props.playSound('CLICK');

    this.setState({
      ...this.state,
      showCredits: false,
      playSound: true,
    });
  }

  getCreditsClassNames = () => {
    const { showCredits } = this.state || {};

    return showCredits
      ? `${styles.overlayBox} ${styles.visible}`
      : `${styles.overlayBox}`
  }

  nextScene = () => {
    this.props.playSound('CLICK');
    setTimeout(() => this.props.history.push('/avatar'), 50);
  }

  render() {
    return (
      <div className={styles.Home}>
        <SoundPlayer
          soundName="CLICK"
          volume={ 30 } />

        <div className={styles.background}>
          <img src={background} alt="" />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.container}>
            <div className={styles.imageLogo}>
              <img src={logo} alt="Logo" />
            </div>
            <div className={styles.textContent}>
              <h1>Sistema Solar</h1>
              <p>
                Atenção, astronauta!
                Você embarcará em uma aventura pelo Sistema Solar.
                Em cada fase do jogo, precisará responder corretamente às perguntas para que o seu foguete receba permissão para decolar, rumo ao planeta seguinte.
              </p>
              <h2>Pronto para o lançamento ?</h2>
            </div>
            <div className={styles.imageContainer}>
              <button
                className={ styles.buttonStart }
                onClick={ this.nextScene }>
                <img src={ iniciar } alt="Botão Iniciar" />
              </button>

            <button 
             className={ styles.buttonCredits }>
              <img
                src={creditos}
                alt="Créditos"
                onClick={ this.openCreditsModal }
                />
            </button>
            </div>

          </div>
        </div>

        <div
          id="overlay"
          className={ this.getCreditsClassNames() }>

          <div id="text" className={styles.overlayText}>

          <button
            className={ styles.close }
            onClick={ this.closeCreditsModal } />

            <h1>Créditos </h1>
            <p><b>Supervisão de digital:</b> Ethel Shunã Queiroz</p>
            <p><b>Edição digital:</b> Priscila Hernandez</p>
            <p><b>Auxílio editorial digital:</b> Daniela Costa</p>
            <p><b>Supervisão de revisão:</b> Dora Helena Feres</p>
            <p><b>Supervisão de pesquisa iconográfica:</b> Léo Burgos</p>
            <p><b>Supervisão de arte e editoração:</b> Cida Alves</p>
            <p><b>Assistência de arte:</b> Lívia Danielli</p>
            <p><b>Coordenação de produção:</b> Leonardo Miranda Ribeiro</p>
            <p><b>Direção de arte:</b> Yan Queroz</p>
            <p><b>Design: Pedro Henrique Rodrigues</b></p>
            <p><b>Programação:</b> Daniel Eiji Ishikawa Sasaki, Eric do Carmo Barbosa e Ricardo Dias Ferrer</p>
          </div>
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  playSound: (payload) => dispatch(playSound(payload)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Capa);