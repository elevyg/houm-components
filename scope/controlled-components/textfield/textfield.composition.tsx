import React from 'react';
import { Textfield } from './textfield';
import { FormProvider, useForm } from 'react-hook-form';

export const BasicTextfield = () => {
  const methods = useForm()
  return (
  <FormProvider {...methods}>
    <Textfield id="name" label="Nombre" />
  </FormProvider>
)};
