import React from 'react';
import classNames from 'classnames';
import { Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

import classes from './ArticleUserControls.module.scss';

type ArticleUserControlsPropsType = {
  slug: string;
  onDelete: (slug: string) => void;
};

const ArticleUserControls = ({ slug, onDelete }: ArticleUserControlsPropsType) => (
  <div className={classes.user_controls}>
    <Popconfirm
      cancelText="No"
      onConfirm={() => onDelete(slug)}
      okText="Yes"
      placement="rightTop"
      title="Are you sure to delete this task?"
    >
      <button className={classNames(classes.delete, classes.controls)} type="button">Delete</button>
    </Popconfirm>
    <Link to={`/articles/${slug}/edit`} className={classNames(classes.edit, classes.controls)}>Edit</Link>
  </div>
);

export default ArticleUserControls;
