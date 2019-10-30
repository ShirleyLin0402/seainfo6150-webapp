import React from 'react';
import css from './ArticleListItem.module.css';
import SlugButton from './SlugButton.jsx';
import ArticleImage from './ArticleImage.jsx'
import PropTypes from 'prop-types';


const ArticleListItem = props =>(
<div className={css.container}>



<p>
<ArticleImage article = {props.article}/>

</p>
<br></br>

   <h2 class = "h2">{props.article.title}</h2>
   <p>{props.article.shortText}</p>
   <time dateTime = {props.article.pubDate}>{props.article.pubDate}</time>

<SlugButton article = {props.article}/>



</div>

);
  ArticleListItem.propTypes = {
    articles: PropTypes.array.isRequired

  };

export default ArticleListItem;
