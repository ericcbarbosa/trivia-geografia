import React from 'react';
import { connect } from 'react-redux';

import imgPular from '../../assets/images/board/pular.png';
import styles from './Pular.module.css';

const getClassNames = (skips, usedSkip) =>
  skips <= 0  || usedSkip ? `${styles.disabled} ${styles.Pular}` : `${styles.Pular}`;

const Pular = ({ onClick, skips, usedSkip }) => (
  <button
    onClick={ onClick }
    className={ getClassNames(skips, usedSkip) }
    disabled={ skips <= 0 || usedSkip }>
    <img src={ imgPular } className={ styles.pularImg } alt="Pular" />
    Pular
  </button>
);


const mapStateToProps = ({ helper }) => {
  const { usedSkip, skips } = helper || {};

  return {
    usedSkip,
    skips,
  };
};

export default connect(
  mapStateToProps,
)(Pular);