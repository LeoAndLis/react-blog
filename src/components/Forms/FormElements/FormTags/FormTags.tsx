import React from 'react';
import classNames from 'classnames';

import classes from './FormTags.module.scss';

type FormTagsType = {
  tagsList: Map<string, string>;
  onAdd: () => void;
  onChange: (newTag: string, key: string) => void;
  onDelete: (key: string) => void;
};

const FormTags = ({ tagsList, onAdd, onChange, onDelete }: FormTagsType) => {
  const tags = [...tagsList.entries()].map(([key, tag], index) => (
    <li key={key} className={classes['tags-item']}>
      <input
        className={classes['tags-list__input']}
        type="text"
        name={`tag-${index}`}
        value={tag}
        onChange={(event) => onChange(event.target.value, key)}
      />
      <button
        className={classNames(classes['tags-list__button'], classes['tags-list__button--delete'])}
        onClick={() => onDelete(key)}
        type="button"
      >
        Delete
      </button>
      {index + 1 === tagsList.size ? (
        <button
          onClick={onAdd}
          className={classNames(classes['tags-list__button'], classes['tags-list__button--add'])}
          type="button"
        >
          Add tag
        </button>
      ) : null}
    </li>
  ));
  return (
    <>
      <label htmlFor="id">Tags</label>
      <ul id="id" className={classes['tags-list']}>
        {tags}
      </ul>
    </>
  );
};

export default FormTags;
