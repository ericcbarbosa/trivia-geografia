import React from 'react';

const renderQuestionImages = (images, imageClicked) => {
  return images.length > 0 && images.map(({ id, url, title, copyrights }) => (
    <div className={ `perguntas__image image-${id}`} key={ id }>
      <img
        src={ `images/questions/${url}` }
        alt={ title }
        onClick={ () => imageClicked({ id, url, title, copyrights }) } />
    </div>
  ));
}

const Images = ({ images, imageClicked }) => (
  <div className={ `perguntas__images-container` }>
    { renderQuestionImages(images, imageClicked) }
  </div>
);

export default Images;