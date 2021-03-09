import React from 'react';
import ArticlesListItem from '../ArticlesListItem/ArticlesListItem';

import classes from './ArticlesList.module.scss';

const ArticlesList = () =>
  <ul className={classes.articlesList}>
    <li className="articles-list__item">
      <ArticlesListItem />
    </li>
    <li className="articles-list__item">
      <ArticlesListItem />
    </li>
  </ul>;

export default ArticlesList;