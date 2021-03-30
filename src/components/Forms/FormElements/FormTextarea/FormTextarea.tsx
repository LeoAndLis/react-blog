import React from 'react';
import classNames from 'classnames';

import classes from './FormTextarea.module.scss';

type FormTextareaType = {
  error?: string;
  label: string;
  name: string;
  placeholder?: string;
  refParam?: any;
};

const FormTextarea = ({ error, label, name, placeholder, refParam }: FormTextareaType) => (
  <>
    <label htmlFor={`id-${name}`}>{label}</label>
    <textarea
      className={classNames(classes.form__textarea, { [classes['form__textarea--error']]: error })}
      id={`id-${name}`}
      name={name}
      placeholder={placeholder}
      ref={refParam}
    />
    {error && <span className={classes['form__textarea-error']}>{error}</span>}
  </>
);

FormTextarea.defaultProps = {
  error: '',
  placeholder: '',
  refParam: null,
};

export default FormTextarea;
