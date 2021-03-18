import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import FormCheckbox from './FormElements/FormCheckbox/FormCheckbox';
import FormHeader from './FormElements/FormHeader/FormHeader';
import FormInput from './FormElements/FormInput/FormInput';
import FormButton from './FormElements/FormButton/FormButton';

import classes from './Form.module.scss';

const SignUpForm = () => {
  console.log('sign up form');
  return (
    <form className={classNames(classes.form, classes['form--small'])}>
      <div className={classNames(classes['form__header-wrapper'], classes.form__item)}>
        <FormHeader title="Create new account" />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput label="Username" placeholder="Username" name="username" />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput label="Email address" placeholder="Email address" name="email" />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput label="Password" placeholder="Password" type="password" name="password" />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput label="Repeat password" placeholder="Repeat password" type="password" name="repeatPassword" />
      </div>
      <div className={classes['form__agreement-wrapper']}>
        <FormCheckbox text="I agree to the processing of my personal information" name="agreement" />
      </div>
      <div className={classes['form__button-wrapper']}>
        <FormButton type="submit" label="Create" />
      </div>
      <p className={classes['form__signin-text']}>
        Already have an account?
        <Link to="/sign-in"> Sign In.</Link>
      </p>
    </form>
  );
};

export default SignUpForm;
