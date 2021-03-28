import React from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import FormButton from './FormElements/FormButton/FormButton';
import FormHeader from './FormElements/FormHeader/FormHeader';
import FormInput from './FormElements/FormInput/FormInput';
import FormTags from './FormElements/FormTags/FormTags';
import FormTextarea from './FormElements/FormTextarea/FormTextarea';
import { ArticleType } from '../../lib/types';

import classes from './Form.module.scss';

type ArticleFormType = {
  article: ArticleType | null;
  formTitle: string;
  onSubmit: (article: ArticleType) => void;
};

const ArticleForm = ({ article, formTitle, onSubmit }: ArticleFormType) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      title: article?.title || '',
      description: article?.description || '',
      body: article?.body || '',
    },
  });
  const validationRules = {
    title: {
      required: 'Email address is required',
    },
    shortDescription: {
      required: 'Email address is required',
    },
    text: {
      required: 'Email address is required',
    },
  };
  return (
    <form className={classNames(classes.form, classes['form--large'])} onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(classes['form__header-wrapper'], classes.form__item)}>
        <FormHeader title={formTitle} />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Title"
          placeholder="Title"
          name="title"
          refParam={register(validationRules.title)}
          error={errors.title && errors.title.message}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Short description"
          placeholder="Short description"
          name="shortDescription"
          refParam={register(validationRules.shortDescription)}
          error={errors.description && errors.description.message}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormTextarea
          label="Text"
          placeholder="Text"
          name="body"
          refParam={register(validationRules.text)}
          error={errors.body && errors.body.message}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormTags />
      </div>
      <div className={classes['form__button-wrapper']}>
        <FormButton type="submit" label="Login" />
      </div>
    </form>
  );
};

export default ArticleForm;
