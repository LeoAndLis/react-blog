import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alert, Spin } from 'antd';
import { createArticle } from '../../store/actions/actions';
import { AddArticleType, StateType } from '../../lib/types';
import ArticleForm from '../Forms/ArticleForm';

import classes from './ArticleCreate.module.scss';

type ArticleCreateProps = {
  contentLoading: boolean;
  error: string;
  validationErrors: any;
  userIsAuthorized: boolean;
  onSubmit: (article: AddArticleType) => void;
};

const ArticleCreate = ({ contentLoading, error, validationErrors, userIsAuthorized, onSubmit }: ArticleCreateProps) => {
  const history = useHistory();
  if ( !userIsAuthorized ) {
    history.push('/sign-in');
  }
  return (
  <>
    {contentLoading && <Spin className={classes['loading-block']} size="large" />}
    {error && <Alert className={classes['error-block']} type="error" message="Error" closable description={error} />}
    <ArticleForm article={null} formTitle="Create new article" onSubmit={onSubmit} validationErrors={validationErrors} />
  </>
  );
};

const mapStateToProps = (state: StateType) => ({
  contentLoading: state.contentLoading,
  error: state.error,
  validationErrors: state.validationErrors,
  userIsAuthorized: state.userIsAuthorized,
});

const mapDispatchToProps = (dispatch: any) => ({ onSubmit: (article: AddArticleType) => dispatch(createArticle(article)) });

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreate);
