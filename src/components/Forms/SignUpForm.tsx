import React from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormCheckbox from './FormElements/FormCheckbox/FormCheckbox';
import FormHeader from './FormElements/FormHeader/FormHeader';
import FormInput from './FormElements/FormInput/FormInput';
import FormButton from './FormElements/FormButton/FormButton';

import classes from './Form.module.scss';

const SignUpForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const currentPassword: string = watch('password', '');
  const validationRules = {
    username: {
      required: 'Name is required',
      maxLength: {
        value: 20,
        message: 'Name needs to be not longer then 20 characters',
      },
      minLength: {
        value: 3,
        message: 'Name needs to be at least 3 characters',
      },
    },
    email: {
      required: 'E-mail is required',
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: 'E-mail should be a valid address',
      },
    },
    password: {
      required: 'Password is required',
      maxLength: {
        value: 40,
        message: 'Password needs to be not longer then 40 characters',
      },
      minLength: {
        value: 8,
        message: 'Password needs to be at least 8 characters',
      },
    },
    repeatPassword: {
      validate: (repeatPassword: string) => currentPassword === repeatPassword || 'The passwords do not match',
    },
    agreement: {
      required: 'You need to agree to the terms before you can sign up',
    },
  };
  return (
    <form className={classNames(classes.form, classes['form--small'])} onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(classes['form__header-wrapper'], classes.form__item)}>
        <FormHeader title="Create new account" />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Username"
          placeholder="Username"
          name="username"
          refParam={register(validationRules.username)}
          error={errors.username && errors.username.message}
        />
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
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Repeat password"
          placeholder="Repeat password"
          type="password"
          name="repeatPassword"
          refParam={register(validationRules.repeatPassword)}
          error={errors.repeatPassword && errors.repeatPassword.message}
        />
      </div>
      <div className={classes['form__agreement-wrapper']}>
        <FormCheckbox
          text="I agree to the processing of my personal information"
          name="agreement"
          refParam={register(validationRules.agreement)}
          error={errors.agreement && errors.agreement.message}
        />
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
