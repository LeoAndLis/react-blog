import React from 'react';

import classes from './FormInput.module.scss';

type FormInputType = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
};

const FormInput = ({ label, name, type, placeholder, value }: FormInputType) => {
  console.log('form input');
  return (
    <>
      <label htmlFor={`id-${name}`}>{label}</label>
      <input className={classes.form__input} id={`id-${name}`} name={name} type={type} placeholder={placeholder} value={value} />
    </>
  );
};

FormInput.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};

export default FormInput;
