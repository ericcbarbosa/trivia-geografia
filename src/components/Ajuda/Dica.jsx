import React from 'react';
import { connect } from 'react-redux';

import imgDica from '../../assets/images/board/dica.png';
import styles from './Dica.module.css';

const getClassNames = (hints, usedHint) =>
  hints <= 0  || usedHint ? `${styles.disabled} ${styles.Dica}` : `${styles.Dica}`;

const Dica = ({ onClick, hints, usedHint }) => (
  <button
    onClick={ onClick }
    className={ getClassNames(hints, usedHint) }
    disabled={ hints <= 0 || usedHint }>
    <img src={ imgDica } className={ styles.dicaImg } alt="Dica" />
    Dica
  </button>
);


const mapStateToProps = ({ helper }) => {
  const { usedHint, hints } = helper || {};

  return {
    usedHint,
    hints,
  };
};

export default connect(
  mapStateToProps,
)(Dica);