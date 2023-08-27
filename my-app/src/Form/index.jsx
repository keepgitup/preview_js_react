import React from 'react';
import { useForm } from 'react-hook-form';
import Field from './Field';

const Form = ({ onSubmit, fields }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {fields.map((field) => (
          <li key={field.name}>
            <div className='mb-3'>
              <label htmlFor={field.name} className='form-label'>
                {field.name}
              </label>
              <Field
                field={field}
                errors={errors}
                control={control}
                register={register}
              />
              <p className='invalid-feedback'>
                {errors[field.name] &&
                  (errors[field.name].message || `請輸入${field.label}`)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <input type='submit' />
    </form>
  );
};

export default Form;
