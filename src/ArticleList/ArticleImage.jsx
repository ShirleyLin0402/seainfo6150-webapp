import React from 'react';
import './ArticleImage.module.css';
import PropTypes from 'prop-types';


const ArticleImage = (props) => {
  return (
    <img src= {props.article.image._url} alt={props.article.title}/>
  );
}
ArticleImage.propTypes = {
    article: PropTypes.object.isRequired
};
export default ArticleImage;
