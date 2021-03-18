import React from 'react';

import classes from './FormCheckbox.module.scss';

type FormCheckboxType = {
  name: string;
  text: string;
};

const FormCheckbox = ({ name, text }: FormCheckboxType) => {
  console.log('form checkbox');
  return (
    <label className={classes['form__label-chackbox']} htmlFor={`id-${name}}`}>
      <input className={classes['form__input-checkbox']} id={`id-${name}}`} type="checkbox" name={name} />
      <span className={classes.form__checkbox}/>
      <span className={classes['form__agreement-text']}>{text}</span>
    </label>
  );
};

export default FormCheckbox;
