import React from "react";
import ArticleListItem from"./ArticleListItem.jsx"
import  "./ArticleList.module.css"
import PropTypes from 'prop-types';

const ArticleList = props => {
  return (
    <ul>
    {props.articles.map(article =>(
      <li key={article.slug}>
      {<ArticleListItem article ={article}/>}</li>
    ) )}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};


export default ArticleList;
