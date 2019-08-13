import React from 'react';
import './style.css';
import btAvancar from '../../assets/images/introducao/avancar.svg';
import { Link } from 'react-router-dom';

const Intro = () => (
  <div className="introBg">
    <div className="content-grid">
      <div className="text-grid">
        <div className="text-container">
          <div className="text-content">
            <h1>Introdução </h1>
            <p>
              Atenção, astronauta!
              Você embarcará em uma aventura pelo Sistema Solar.
              Em cada fase do jogo, precisará responder corretamente às perguntas para que o seu foguete receba permissão para decolar, rumo ao planeta seguinte.
              <strong>Pronto para o lançamento?</strong>
            </p>
            <Link to={'/avatar'}>
              <img src={btAvancar} alt="Botão avançar" className="avancar" />
            </Link>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;