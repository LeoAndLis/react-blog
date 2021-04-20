import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import { ArticleType } from '../../lib/types';
import ArticleUserControls from '../ArticleUserControls/ArticleUserControls';
import { fetchArticleFavorite } from '../../store/actions/actions';

import defaultImage from '../../assets/images/smiley-cyrus.jpg';
import classes from '../Article/Article.module.scss';

type ArticlesListItemPropsType = {
  article: ArticleType;
  showBody?: boolean;
  showControls?: boolean;
  deleteCurArticle?: (slug: string) => void;
  setFavorite: (slug: string, favorite: boolean) => void;
};

const ArticlesListItem = ({ article, showBody, showControls, deleteCurArticle, setFavorite }: ArticlesListItemPropsType) => {
  const { slug, title, favorited, description, tagList, createdAt, favoritesCount, author, body } = article;
  const { username, image } = author;
  const tags = tagList.map((tag) => <li key={tag} className={classes['article-tags__item']}>{tag}</li>);
  console.log(article);
  const articleBody = (
    <div className={classes.article__text}>
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
  return (
    <article className={classes.article}>
      <header className={classes.article__header}>
        <div className={classes['article__info-block']}>
          <div className={classes['article__title-block']}>
            <Link to={`/articles/${slug}`}><h2 className={classes.article__title}>{title}</h2></Link>
            <button className={classNames(classes['article__favorite-button'], { [classes['article__favorite-button']]: favorited })} type="button" onClick={() => setFavorite(slug, favorited)}> </button>
            <span className={classes['article__favorite-count']}>{favoritesCount}</span>
          </div>
          <ul className={classNames(classes.article__tags, classes['article-tags'])}>
            {tags}
          </ul>
        </div>
        <div className={classes['article__author-block']}>
          <span className={classes.article__author}>{username}</span>
          <span className={classes.article__date}>{format(new Date(createdAt), 'MMMM, d yyyy')}</span>
          <img
            className={classes['article__author-img']}
            width="46"
            height="46"
            src={image || defaultImage}
            alt={username}
          />
          { showControls && deleteCurArticle && <ArticleUserControls slug={slug} onDelete={() => deleteCurArticle(slug)} /> }
        </div>
      </header>
      <p className={classes.article__description}>
        {description}
      </p>
      {showBody && articleBody}
    </article>);
};

ArticlesListItem.defaultProps = {
  showBody: false,
  showControls: false,
  deleteCurArticle: undefined,
};

const mapDispatchToProps = (dispatch: any) => ({ setFavorite: (slug: string, favorite: boolean) => dispatch(fetchArticleFavorite(slug, favorite)) });

export default connect(null, mapDispatchToProps)(ArticlesListItem);
