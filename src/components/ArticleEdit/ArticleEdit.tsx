import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import { AddArticleType, ArticleType, StateType } from '../../lib/types';
import ArticleForm from '../Forms/ArticleForm';

import classes from './ArticleEdit.module.scss';
import { setArticle, updateArticle } from '../../store/actions/actions';

type ArticleEditProps = {
  contentLoading: boolean;
  curArticle: ArticleType;
  error: string;
  slug: string;
  validationErrors: any;
  getCurArticle: (value: string) => void;
  updateCurArticle: (article: AddArticleType, slug?: string) => void;
};

const ArticleEdit = ({ contentLoading, curArticle, error, slug, validationErrors, getCurArticle, updateCurArticle }: ArticleEditProps) => {
  console.log('article edit', slug);
  const loadCurArticle = useCallback((value: string) => getCurArticle(value), [ getCurArticle ]);
  useEffect(() => loadCurArticle(slug),
    [ slug, loadCurArticle ]);
  return (
    <>
      {contentLoading && <Spin className={classes['loading-block']} size="large" />}
      {error && <Alert className={classes['error-block']} type="error" message="Error" closable description={error} />}
      <ArticleForm article={curArticle || null} formTitle="Edit article" onSubmit={(article: AddArticleType) => updateCurArticle(article, slug)} validationErrors={validationErrors} />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  contentLoading: state.contentLoading,
  curArticle: state.curArticle,
  error: state.error,
  validationErrors: state.validationErrors,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCurArticle: (slug: string) => dispatch(setArticle(slug)),
  updateCurArticle: (article: AddArticleType, slug?: string) => dispatch(updateArticle(article, slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);