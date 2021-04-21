import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Alert, Pagination, Spin } from 'antd';
import ArticlesListItem from '../ArticlesListItem/ArticlesListItem';
import { setArticlesList, fetchArticleFavorite } from '../../store/actions/actions';
import { ArticleType, StateType } from '../../lib/types';

import classes from './ArticlesList.module.scss';

type ArticlesListPropsType = {
  articlesCount: number;
  articlesList: ArticleType[];
  contentLoading: boolean;
  errorMsg: string;
  userIsAuthorized: boolean;
  setFavorite: (slug: string, favorite: boolean) => void;
  setNewArticles: (page: number, pageSize: number | undefined) => {};
};

const ArticlesList = ({ articlesCount, articlesList, contentLoading, errorMsg, userIsAuthorized, setFavorite, setNewArticles }: ArticlesListPropsType) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setNewArticles(1, 20);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  const onChangePage = (newPage: number, pageSize: number | undefined) => {
    setPage(newPage);
    setNewArticles(newPage, pageSize);
  };
  const articles = <ul className={classes['articles-list']}>
    {articlesList.map((article) => (
      <li key={article.slug} className="articles-list__item">
        <ArticlesListItem article={article} deleteCurArticle={() => {}} setFavorite={setFavorite} activeFavButton={userIsAuthorized} />
      </li>))
    }
  </ul>;
  const error = errorMsg.length ? <Alert className={classes['articles-error']} type="error" message="Error" description={errorMsg} /> : null;
  const spinner = contentLoading ? <Spin size="large" className={classes['articles-loading']} /> : null;
  const pagination = articlesCount && !contentLoading ?
    <Pagination
      current={page}
      className={classes['articles-pagination']}
      defaultCurrent={1}
      size="small"
      defaultPageSize={20}
      showSizeChanger={false}
      onChange={onChangePage}
      total={articlesCount}
    /> : null;
  return (
    <>
      {spinner || error || articles}
      {pagination}
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  articlesCount: state.articlesCount,
  articlesList: state.articlesList,
  contentLoading: state.contentLoading,
  errorMsg: state.error,
  userIsAuthorized: state.userIsAuthorized,
});

const mapDispatchToProps = (dispatch: any) => ({
  setNewArticles: (page: number, pageSize: number | undefined) => dispatch(setArticlesList(page, pageSize)),
  setFavorite: (slug: string, favorite: boolean) => dispatch(fetchArticleFavorite(slug, favorite, 'listArticle')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);