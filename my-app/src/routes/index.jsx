import React from 'react';
import Form from '../components/Form';

const fields = [
  {
    name: 'name',
    type: 'text',
    label: '姓名',
    required: true,
    pattern: { value: /[A-Za-z]{3}/, message: '請輸入正確的欄位，拜託' },
  },
  {
    name: 'email',
    type: 'email',
    label: '電子郵件',
    required: '請輸入正確的欄位，拜託',
  },
  { name: 'phone', type: 'tel', label: '電話', required: true },
  { name: 'password', type: 'password', label: '密碼' },
  { name: 'password2', type: 'password', label: '確認密碼' },
  { name: 'address', type: 'text', label: '地址' },
  {
    name: 'sex',
    type: 'select',
    label: '性別',
    required: true,
    options: ['男', '女', '其他'],
  },
  { name: 'birth', type: 'date', label: '生日' },
];

const Root = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Form onSubmit={onSubmit} fields={fields} />
    </>
  );
};

export default Root;
