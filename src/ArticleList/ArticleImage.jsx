import React from 'react';
import './ArticleImage.module.css';
import PropTypes from 'prop-types';


const ArticleImage = (props) => (
  <div class="image">
    <img src= {props.article.image._url} alt={props.article.title} width="230" height="130"
  />

  </div>
);
ArticleImage.propTypes = {
    article: PropTypes.object.isRequired
};
export default ArticleImage;
