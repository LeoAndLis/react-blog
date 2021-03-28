import React from 'react';
import classNames from 'classnames';

import classes from './FormTags.module.scss';

const FormTags = () => {
  console.log('tags');
  return (
    <>
      <label htmlFor="id">Tags</label>
      <ul id="id" className={classes['tags-list']}>
        <li className={classes['tags-item']}>
          <input className={classes['tags-list__input']} type="text" name="1"/>
          <button className={classNames(classes['tags-list__button'], classes['tags-list__button--delete'])} type="button">Delete</button>
        </li>
        <li  className={classes['tags-item']}>
          <input className={classes['tags-list__input']} type="text" name="1"/>
          <button className={classNames(classes['tags-list__button'], classes['tags-list__button--delete'])} type="button">Delete</button>
          <button className={classNames(classes['tags-list__button'], classes['tags-list__button--add'])} type="button">Add tag</button>
        </li>
      </ul>
    </>
  );
};

export default FormTags;