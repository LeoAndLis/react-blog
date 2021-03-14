import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert, Pagination, Spin } from 'antd';
import ArticlesListItem from '../ArticlesListItem/ArticlesListItem';
import { setArticlesList } from '../../store/actions/actions';
import { ArticleType, StateType } from '../../lib/types';

import classes from './ArticlesList.module.scss';

type ArticlesListPropsType = {
  articlesCount: number;
  articlesList: ArticleType[];
  articlesListLoading: boolean;
  errorMsg: string;
  setNewArticles: (page: number, pageSize: number | undefined) => {};
};

const ArticlesList = ({ articlesCount, articlesList, articlesListLoading, errorMsg, setNewArticles }: ArticlesListPropsType) => {
  useEffect(() => {
    setNewArticles(0, 20);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  const articles = <ul className={classes['articles-list']}>
    {articlesList.map((article) => <li key={article.slug} className="articles-list__item"><ArticlesListItem
      article={article} /></li>)}
  </ul>;
  const error = errorMsg.length ? <Alert className={classes['articles-error']} type="error" message="Error" description={errorMsg} /> : null;
  const spinner = articlesListLoading ? <Spin size="large" className={classes['articles-loading']} /> : null;
  const pagination = articlesCount ?
    <Pagination
      className={classes['articles-pagination']}
      size="small"
      defaultPageSize={20}
      showSizeChanger={false}
      onChange={setNewArticles}
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
  articlesListLoading: state.articlesListLoading,
  errorMsg: state.error,
});

const mapDispatchToProps = (dispatch: any) => ({ setNewArticles: (page: number, pageSize: number | undefined) => dispatch(setArticlesList(page, pageSize)) });

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);