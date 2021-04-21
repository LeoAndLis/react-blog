import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import ArticlesListItem from '../ArticlesListItem/ArticlesListItem';
import { deleteArticle, needRedirectAction, setArticle, fetchArticleFavorite } from '../../store/actions/actions';
import { ArticleType, StateType, UserType } from '../../lib/types';

import classes from './Article.module.scss';

type ArticleParamsType = {
  contentLoading: boolean;
  curArticle: ArticleType;
  errorMsg: string;
  needRedirect: boolean;
  slug: string;
  user: UserType;
  userIsAuthorized: boolean;
  getNewArticle: (value: string) => void;
  deleteCurArticle: (slug: string) => void;
  setNeedRedirect: (value: boolean) => void;
  setFavorite: (slug: string, favorite: boolean) => void;
};

const Article = ({ contentLoading, curArticle, getNewArticle, errorMsg, needRedirect, slug, user, userIsAuthorized, deleteCurArticle, setNeedRedirect, setFavorite }: ArticleParamsType) => {
  const loadNewArticle = useCallback((value: string) => getNewArticle(value), [ getNewArticle ]);
  useEffect(() => loadNewArticle(slug),
    [ slug, loadNewArticle ]);
  const history = useHistory();
  if ( needRedirect ) {
    setNeedRedirect(false);
    history.push('/');
  }

  const curUsername = user?.username || '';
  const { username: articleUsername } = curArticle.author;
  if ( errorMsg.length ) {
    return <Alert className={classes['article-error']} type="error" message="Error" description={errorMsg} />;
  }
  if ( contentLoading ) {
    return <Spin  size="large" className={classes['article-loading']} />;
  }
  return <ArticlesListItem
    article={curArticle}
    showBody
    showControls={userIsAuthorized && curUsername === articleUsername}
    deleteCurArticle={deleteCurArticle}
    setFavorite={setFavorite}
    activeFavButton={userIsAuthorized}
  />;
};

const mapStateToProps = (state: StateType) => ({
  contentLoading: state.contentLoading,
  curArticle: state.curArticle,
  errorMsg: state.error,
  needRedirect: state.needRedirect,
  user: state.user,
  userIsAuthorized: state.userIsAuthorized,
});

const mapDispatchToProps = (dispatch: any) => ({
  getNewArticle: (slug: string) => dispatch(setArticle(slug)),
  deleteCurArticle: (slug: string) => dispatch(deleteArticle(slug)),
  setNeedRedirect: (value: boolean) => dispatch(needRedirectAction(value)),
  setFavorite: (slug: string, favorite: boolean) => dispatch(fetchArticleFavorite(slug, favorite, 'curArticle')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);