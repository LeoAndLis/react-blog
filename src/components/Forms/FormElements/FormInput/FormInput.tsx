import React from 'react';
import classNames from 'classnames';

import classes from './FormInput.module.scss';

type FormInputType = {
  error?: string;
  label: string;
  name: string;
  placeholder?: string;
  refParam?: any;
  type?: string;
};

const FormInput = ({ error, label, name, placeholder, refParam, type }: FormInputType) => (
  <>
    <label htmlFor={`id-${name}`}>{label}</label>
    <input
      className={classNames(classes.form__input, { [classes['form__input--error']]: error })}
      id={`id-${name}`}
      name={name}
      placeholder={placeholder}
      ref={refParam}
      type={type}
    />
    {error && <span className={classes['form__input-error']}>{error}</span>}
  </>
);

FormInput.defaultProps = {
  error: '',
  placeholder: '',
  refParam: null,
  type: 'text',
};

export default FormInput;
