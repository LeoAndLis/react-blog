import React from 'react';
import classNames from 'classnames';

import classes from './FormTags.module.scss';

type FormTagsType = {
  tagsList: string[];
  onAdd: () => void;
  onChange: (newTag: string, index: number) => void;
  onDelete: (index: number) => void;
};

const FormTags = ({ tagsList, onAdd, onChange, onDelete }: FormTagsType) => {
  console.log('tags', tagsList);
  const tags = tagsList.map((tag, index) => (
    <li key={tag} className={classes['tags-item']}>
      <input className={classes['tags-list__input']} type="text" name="1" value={tag} onChange={(event) => onChange(event.target.value, index)} />
      <button
        className={classNames(classes['tags-list__button'], classes['tags-list__button--delete'])}
        onClick={() => onDelete(index)}
        type="button"
      >
        Delete
      </button>
    </li>));
  return (
    <>
      <label htmlFor="id">Tags</label>
      <ul id="id" className={classes['tags-list']}>
        {tags}
        <li className={classes['tags-item']}>
          <input className={classes['tags-list__input']} type="text" name="1" />
          <button className={classNames(classes['tags-list__button'], classes['tags-list__button--delete'])}
                  type="button">Delete
          </button>
          <button onClick={onAdd}
                  className={classNames(classes['tags-list__button'], classes['tags-list__button--add'])}
                  type="button">Add tag
          </button>
        </li>
      </ul>
    </>
  );
};

export default FormTags;