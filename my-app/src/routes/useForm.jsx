import React from 'react';
import { useForm } from 'react-hook-form';

const fields = [
  { name: 'name', type: 'text', label: '姓名', required: true },
  { name: 'email', type: 'email', label: '電子郵件', required: true },
  { name: 'phone', type: 'tel', label: '電話', required: true },
  { name: 'password', type: 'password', label: '密碼' },
  { name: 'password2', type: 'password', label: '確認密碼' },
  { name: 'address', type: 'text', label: '地址' },
  { name: 'birth', type: 'date', label: '生日' },
];

const Root = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {fields.map((field) => (
          <li key={field.name}>{field.name}</li>
        ))}
      </ul>

      <input type='submit' />
    </form>
  );
};

export default Root;