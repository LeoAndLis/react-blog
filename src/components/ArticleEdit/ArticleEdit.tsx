import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import { ArticleType, StateType } from '../../lib/types';
import ArticleForm from '../Forms/ArticleForm';

import classes from './ArticleEdit.module.scss';
import { setArticle } from '../../store/actions/actions';

type ArticleEditProps = {
  contentLoading: boolean;
  curArticle: ArticleType;
  error: string;
  slug: string;
  validationErrors: any;
  getNewArticle: (value: string) => void;
};

const ArticleEdit = ({ contentLoading, curArticle, error, slug, validationErrors, getNewArticle }: ArticleEditProps) => {
  console.log('article edit', slug);
  const loadNewArticle = useCallback((value: string) => getNewArticle(value), [ getNewArticle ]);
  useEffect(() => loadNewArticle(slug),
    [ slug, loadNewArticle ]);
  return (
    <>
      {contentLoading && <Spin className={classes['loading-block']} size="large" />}
      {error && <Alert className={classes['error-block']} type="error" message="Error" closable description={error} />}
      <ArticleForm article={curArticle || null} formTitle="Edit article" onSubmit={() => {}} validationErrors={validationErrors} />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  contentLoading: state.contentLoading,
  curArticle: state.curArticle,
  error: state.error,
  validationErrors: state.validationErrors,
});

const mapDispatchToProps = (dispatch: any) => ({ getNewArticle: (slug: string) => dispatch(setArticle(slug)) });

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);