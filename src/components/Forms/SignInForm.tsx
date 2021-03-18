import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import FormHeader from './FormElements/FormHeader/FormHeader';
import FormInput from './FormElements/FormInput/FormInput';
import FormButton from './FormElements/FormButton/FormButton';

import classes from './Form.module.scss';

const SignInForm = () => {
  console.log('sign in form');
  return (
    <form className={classNames(classes.form, classes['form--small'])}>
      <div className={classNames(classes['form__header-wrapper'], classes.form__item)}>
        <FormHeader title="Sign In" />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput label="Email address" placeholder="Email address" name="email" />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput label="Password" placeholder="Password" type="password" name="password" />
      </div>
      <div className={classes['form__button-wrapper']}>
        <FormButton type="submit" label="Login" />
      </div>
      <p className={classes['form__signin-text']}>
        Already have an account?
        <Link to="/sign-un"> Sign Up.</Link>
      </p>
    </form>
  );
};

export default SignInForm;
