import React from 'react';

type FormTextareaType = {
  label: string;
  name: string;
  placeholder: string;
  text: string;
};

const FormTextarea = ({ label, name, placeholder, text }: FormTextareaType) => {
  console.log('form textarea');
  return (
    <>
      <label htmlFor={`id-${name}`}>{label}</label>
      <textarea id={`id-${name}`} name={name} placeholder={placeholder}>{text}</textarea>
    </>
  );
};

export default FormTextarea;
