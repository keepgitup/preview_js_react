import React from 'react';
import { useFieldArray } from 'react-hook-form';

const InputField = ({ field, errors, register }) => {
  return (
    <input
      className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
      {...register(field.name, {
        required: field.required,
        pattern: field.pattern,
      })}
      type={field.type}
    />
  );
};
const SelectField = ({ field, errors, register }) => {
  return (
    <select
      className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
      aria-label='Default select example'
      {...register(field.name, {
        required: field.required,
      })}
    >
      <option value={''}>Open this select menu</option>
      {/* {field.testOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
			))} */}
      {field.options.map((option, index) => (
        <option key={option} value={option}>
          {field.optionsDisplay ? field.optionsDisplay[index] : option}
        </option>
      ))}
    </select>
  );
};

const CheckboxField = ({ field, errors, register }) => {
  return (
    <article>
      {field.options.map((option, index) => (
        <label key={option} htmlFor={option}>
          <input
            className='form-check-input mt-0'
            type='checkbox'
            id={option}
            value={option}
            aria-label='Checkbox for following text input'
            {...register(field.name, {
              required: field.required,
            })}
          />
          {field.optionsDisplay ? field.optionsDisplay[index] : option}
        </label>
      ))}
    </article>
  );
};

const ArrayField = ({ field, errors, control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: field.name,
  });

  return (
    <article>
      <button
        type='button'
        onClick={() =>
          append({ firstName: 'appendBill', lastName: 'appendLuo' })
        }
      >
        新增
      </button>
      {fields.map((item, index) => (
        <section key={item.id}>
          顏色
          <input
            type='text'
            className={`form-control`}
            {...register(`${field.name}.${index}.firstName`)}
          />
          數量
          <input
            type='text'
            className={`form-control`}
            {...register(`${field.name}.${index}.lastName`)}
          />
          <button type='button' onClick={() => remove(index)}>
            Delete
          </button>
        </section>
      ))}
    </article>
  );
};

const RadioField = ({ field, errors, register }) => {
  return (
    <article>
      {field.options.map((option, index) => (
        <label key={option} htmlFor={option}>
          <input
            className='form-check-input mt-0'
            type='radio'
            id={option}
            value={option}
            aria-label='Radio for following text input'
            {...register(field.name, {
              required: field.required,
            })}
          />
          {field.optionsDisplay ? field.optionsDisplay[index] : option}
        </label>
      ))}
    </article>
  );
};
const Field = ({ field, errors, control, register }) => {
  switch (field.type) {
    case 'arrayField':
      return (
        <ArrayField
          field={field}
          errors={errors}
          control={control}
          register={register}
        />
      );

    case 'checkbox':
      return (
        <CheckboxField field={field} errors={errors} register={register} />
      );

    case 'radio':
      return <RadioField field={field} errors={errors} register={register} />;

    case 'select':
      return <SelectField field={field} errors={errors} register={register} />;

    default:
      return <InputField field={field} errors={errors} register={register} />;
  }
};

export default Field;