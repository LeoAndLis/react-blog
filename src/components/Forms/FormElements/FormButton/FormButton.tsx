import React from 'react';

import classes from './FormButton.module.scss';

type FormButtonType = {
  type: 'button' | 'submit' | 'reset';
  label: string;
};

const FormButton = ({ type = 'submit', label }: FormButtonType) => (
  // eslint-disable-next-line react/button-has-type
  <button className={classes['form__submit-button']} type={type}>
    {label}
  </button>
);

export default FormButton;
