import React from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormHeader from './FormElements/FormHeader/FormHeader';
import FormInput from './FormElements/FormInput/FormInput';
import FormButton from './FormElements/FormButton/FormButton';
import { UserType } from '../../lib/types';

import classes from './Form.module.scss';

type SignInFormPropsType = {
  onSubmit: (user: UserType) => void;
};

const SignInForm = ({ onSubmit }: SignInFormPropsType) => {
  const { register, handleSubmit, errors } = useForm();
  const validationRules = {
    email: {
      required: 'Email address is required',
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: 'E-mail should be a valid address',
      },
    },
    password: {
      required: 'Password is required',
    },
  };
  return (
    <form className={classNames(classes.form, classes['form--small'])} onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(classes['form__header-wrapper'], classes.form__item)}>
        <FormHeader title="Sign In" />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Email address"
          placeholder="Email address"
          name="email"
          refParam={register(validationRules.email)}
          error={errors.email && errors.email.message}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          refParam={register(validationRules.password)}
          error={errors.password && errors.password.message}
        />
      </div>
      <div className={classes['form__button-wrapper']}>
        <FormButton type="submit" label="Login" />
      </div>
      <p className={classes['form__signin-text']}>
        Already have an account?
        <Link to="/sign-up"> Sign Up.</Link>
      </p>
    </form>
  );
};

export default SignInForm;
