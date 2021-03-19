import React from 'react';

import classes from './FormCheckbox.module.scss';

type FormCheckboxType = {
  error?: string;
  name: string;
  refParam?: any;
  text: string;
};

const FormCheckbox = ({ error, name, refParam, text }: FormCheckboxType) => (
  <>
    <label className={classes['form__label-chackbox']} htmlFor={`id-${name}}`}>
      <input
        className={classes['form__input-checkbox']}
        id={`id-${name}}`}
        type="checkbox"
        name={name}
        ref={refParam}
      />
      <span className={classes.form__checkbox} />
      <span className={classes['form__agreement-text']}>{text}</span>
    </label>
    {error && <span className={classes['form__checkbox-error']}>{error}</span>}
  </>
);

FormCheckbox.defaultProps = {
  error: '',
  refParam: null,
};

export default FormCheckbox;
