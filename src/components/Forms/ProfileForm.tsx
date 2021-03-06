import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import FormHeader from './FormElements/FormHeader/FormHeader';
import FormInput from './FormElements/FormInput/FormInput';
import FormButton from './FormElements/FormButton/FormButton';
import { ValidationErrorsType, UserType, UserEditType } from '../../lib/types';

import classes from './Form.module.scss';

type ProfileFormDataType = {
  email: string;
  image: string | null;
  password: string;
  username: string;
};

type ProfileFormPropsType = {
  validationErrors: ValidationErrorsType;
  user: UserType;
  onSubmit: (user: UserEditType) => void;
};

const ProfileForm = ({ validationErrors, user, onSubmit }: ProfileFormPropsType) => {
  const defaultValues = useMemo(
    () => ({
      username: user?.username || '',
      email: user?.email || '',
      image: user?.image || '',
    }),
    [user],
  );

  const { register, handleSubmit, errors, reset } = useForm<ProfileFormDataType>({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const submitForm = ({ username, email, password, image }: UserEditType) => {
    const editData: UserEditType = { username, email, image };
    editData.token = user.token;
    if (password !== '') {
      editData.password = password;
    }
    onSubmit(editData);
  };

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
      maxLength: {
        value: 40,
        message: 'Password needs to be not longer then 40 characters',
      },
      minLength: {
        value: 8,
        message: 'Password needs to be at least 8 characters',
      },
    },
    imageUrl: {
      pattern: {
        value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/,
        message: 'Image url should be a valid url (https://google.com)',
      },
    },
  };
  return (
    <form className={classNames(classes.form, classes['form--small'])} onSubmit={handleSubmit(submitForm)}>
      <div className={classNames(classes['form__header-wrapper'], classes.form__item)}>
        <FormHeader title="Edit profile" />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Username"
          placeholder="Username"
          name="username"
          refParam={register(validationRules.username)}
          error={(errors.username && errors.username.message) || validationErrors?.username}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Email address"
          placeholder="Email address"
          name="email"
          refParam={register(validationRules.email)}
          error={(errors.email && errors.email.message) || validationErrors?.email}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="New password"
          placeholder="New password"
          type="password"
          name="password"
          refParam={register(validationRules.password)}
          error={errors.password && errors.password.message}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Avatar image (url)"
          placeholder="Avatar image (url)"
          name="image"
          refParam={register(validationRules.imageUrl)}
          error={errors.image && errors.image.message}
        />
      </div>
      <div className={classes['form__button-wrapper']}>
        <FormButton type="submit" label="Save" />
      </div>
    </form>
  );
};

export default ProfileForm;
