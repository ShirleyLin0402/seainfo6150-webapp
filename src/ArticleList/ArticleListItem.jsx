import React from 'react';
import './ArticleListItem.module.css';
import SlugButton from './SlugButton.jsx';
import PropTypes from 'prop-types';

const ArticleListItem = props =>(


      <section >
      <h2 >{props.article.title}</h2>
      <p>{props.article.shortText}</p>
      <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
      {<SlugButton article ={props.article} />}


     </section>

  )

  ArticleListItem.propTypes = {
    article: PropTypes.array.isRequired

  };

export default ArticleListItem;
