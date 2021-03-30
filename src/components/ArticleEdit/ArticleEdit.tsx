import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import { StateType } from '../../lib/types';
import ArticleForm from '../Forms/ArticleForm';

import classes from './ArticleEdit.module.scss';

type ArticleEditProps = {
  contentLoading: boolean;
  error: string;
  slug: string;
};

const ArticleEdit = ({ contentLoading, error, slug }: ArticleEditProps) => {
  useEffect(() => console.log(slug), [ slug ]);
  return (
    <>
      {contentLoading && <Spin className={classes['loading-block']} size="large" />}
      {error && <Alert className={classes['error-block']} type="error" message="Error" closable description={error} />}
      <ArticleForm article={null} formTitle="Edit article" onSubmit={() => {}} />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  contentLoading: state.contentLoading,
  error: state.error,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);