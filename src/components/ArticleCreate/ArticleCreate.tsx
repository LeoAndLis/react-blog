import React from 'react';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import { StateType } from '../../lib/types';
import ArticleForm from '../Forms/ArticleForm';

import classes from './ArticleCreate.module.scss';

type ArticleCreateProps = {
  contentLoading: boolean;
  error: string;
};

const ArticleCreate = ({ contentLoading, error }: ArticleCreateProps) => (
  <>
    {contentLoading && <Spin className={classes['loading-block']} size="large" />}
    {error && <Alert className={classes['error-block']} type="error" message="Error" closable description={error} />}
    <ArticleForm article={null} formTitle="Create new article" onSubmit={() => {}} />
  </>
);

const mapStateToProps = (state: StateType) => ({
  contentLoading: state.contentLoading,
  error: state.error,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreate);
