// src/components/ContactForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Email invalide').required('Email requis'),
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <label>Email :</label>
      <input type="text" {...register('email')} className="border p-2 w-full" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2">Envoyer</button>
    </form>
  );
};

export default ContactForm;
