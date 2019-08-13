import React from 'react';

import styles from './ImageModal.module.css';

const ImageModal = ({ visible, id, url, title, copyrights, onClose }) => {
  const modalIsVisible = () => {
    return `${styles.ImageModal} ${ visible ? styles.visible : '' }`;
  }

  return (
    <div
      id={ `overlay modal-image-${id}` }
      className={ modalIsVisible() }>
      <button
        className={ styles.close }
        onClick={ onClose } />

      <div className={ styles.wrapper }>
        <h3 className={ styles.title }>{ title }</h3>
        <div className={ styles.imageContainer }>
          <img
            className={ styles.image }
            src={ `images/questions/${url}` }
            alt="Cowboys"/>
        </div>
        <small className={ styles.copy }>{ copyrights }</small>
      </div>
    </div>
  )
}

export default ImageModal;