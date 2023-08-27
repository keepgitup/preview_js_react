import React, { useRef } from 'react';

const Root = () => {
  const name = useRef();
  const email = useRef();

  return (
    <form>
      <label htmlFor=''>名稱</label>
      <input type='text' ref={name} defaultValue={'abcd'} />
      <label htmlFor=''>電子信箱</label>
      <input type='email' ref={email} />
      <button
        type='button'
        onClick={() => console.log(name.current.value, email.current.value)}
      >
        BUTTON
      </button>
    </form>
  );
};

export default Root;