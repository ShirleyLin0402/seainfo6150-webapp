import React from 'react';
import './ArticleListItem.module.css';
import SlugButton from './SlugButton.jsx';
import ArticleImage from './ArticleImage.jsx'
import PropTypes from 'prop-types';

const ArticleListItem = props =>(
<ul>
      <ul>
         {<ArticleImage article ={props.article}/>}

      </ul>
      <section>
         <h2 >{props.article.title}</h2>

         <div>


         <p>

         {props.article.shortText}
        </p>
        

         <time dateTime = {props.article.pubYear}>{props.article.pubDate}
         </time>

         </div>

         <p>
         {<SlugButton article ={props.article} />}
         </p>
         <br></br>
         <br></br>
     </section>
</ul>
  )

  ArticleListItem.propTypes = {
    article: PropTypes.array.isRequired

  };

export default ArticleListItem;
