import React from 'react';

import classes from './FormHeader.module.scss';

type FormHeaderType = {
  title: string;
};

const FormHeader = ({ title }: FormHeaderType) => <h3 className={classes['form-title']}>{title}</h3>;

export default FormHeader;
