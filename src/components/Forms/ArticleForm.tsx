import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import FormButton from './FormElements/FormButton/FormButton';
import FormHeader from './FormElements/FormHeader/FormHeader';
import FormInput from './FormElements/FormInput/FormInput';
import FormTags from './FormElements/FormTags/FormTags';
import FormTextarea from './FormElements/FormTextarea/FormTextarea';
import { AddArticleType, ArticleType } from '../../lib/types';

import classes from './Form.module.scss';

type ArticleFormPropsType = {
  article: ArticleType | null;
  formTitle: string;
  validationErrors: any;
  onSubmit: (article: AddArticleType) => void;
};

type ArticleFormType = {
  title: string;
  description: string;
  body: string;
};

const ArticleForm = ({ article, formTitle, validationErrors, onSubmit }: ArticleFormPropsType) => {
  const { register, handleSubmit, errors } = useForm<ArticleFormType>({
    defaultValues: {
      title: article?.title || '',
      description: article?.description || '',
      body: article?.body || '',
    },
  });
  const defaultTags = useMemo(() => article?.tagList || ['', '', ''], [ article ]);
  const mappedTags = new Map(defaultTags.map((tag) => ([nanoid(), tag])));
  const [ tags, setTags ] = useState<Map<string, string>>(mappedTags);
  useEffect(()=>{
    if ( tags.size === 0 ) {
      setTags(new Map(defaultTags.map((tag) => ([nanoid(), tag]))));
    }
  }, [ tags, defaultTags ]);
  const onAddTag = () => setTags((oldTags) => {
    const newTags = new Map(oldTags.entries());
    return newTags.set(nanoid(), '');
  });
  const onChangeTag = (newTag: string, key: string) => setTags((oldTags) => {
    const newTags = new Map(oldTags.entries());
    return newTags.set(key, newTag);
  });
  const onDeleteTag = (key: string) => setTags((oldTags) => {
    const newTags = new Map(oldTags.entries());
    newTags.delete(key);
    return newTags;
  });
  const onSubmitArticle = (data: ArticleFormType) => {
    console.log(data);
    for (const entry of tags) {
      console.log(entry);
      if (entry[1] === '') {
        tags.delete(entry[0]);
      }
    }
    let curTags: string[] = [];
    if ( tags.size ) {
      curTags = [...new Set(tags.values())];
    }
    const curData = { ...data, tagList: curTags };
    console.log(curData);
    onSubmit(curData);
  };
  const validationRules = {
    title: {
      required: 'Email address is required',
    },
    description: {
      required: 'Email address is required',
    },
    text: {
      required: 'Email address is required',
    },
  };
  return (
    <form className={classNames(classes.form, classes['form--large'])} onSubmit={handleSubmit(onSubmitArticle)}>
      <div className={classNames(classes['form__header-wrapper'], classes.form__item)}>
        <FormHeader title={formTitle} />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Title"
          placeholder="Title"
          name="title"
          refParam={register(validationRules.title)}
          error={(errors.title && errors.title.message) || validationErrors?.title}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormInput
          label="Short description"
          placeholder="Short description"
          name="description"
          refParam={register(validationRules.description)}
          error={(errors.description && errors.description.message) || validationErrors?.description}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormTextarea
          label="Text"
          placeholder="Text"
          name="body"
          refParam={register(validationRules.text)}
          error={(errors.body && errors.body.message) || validationErrors?.body}
        />
      </div>
      <div className={classNames(classes['form__input-wrapper'], classes.form__item)}>
        <FormTags tagsList={tags} onAdd={onAddTag} onChange={onChangeTag} onDelete={onDeleteTag} />
      </div>
      <div className={classes['form__button-wrapper']}>
        <FormButton type="submit" label="Save" />
      </div>
    </form>
  );
};

export default ArticleForm;
