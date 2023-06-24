// import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';

// export const RegisterForm = () => {
//   // const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     const name = form.elements.name.value;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);

//     // dispatch(
//     //   register({
//     //     name: form.elements.name.value,
//     //     email: form.elements.email.value,
//     //     password: form.elements.password.value,
//     //   })
//     // );

//     form.reset();
//   };

//   return (
//     <form className={`${css.form} ${css.blue}`} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" className={css.input} />
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" className={css.input} />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" className={css.input} />
//       </label>
//       <button type="submit" className={css.button}>Register</button>
//     </form>
//   );
// };
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  // const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // dispatch(
    //   register({
    //     name,
    //     email,
    //     password,
    //   })
    // );

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={`${css.form} ${css.blue}`} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.formGroup}>
        <label className={css.label}>
          Username
        </label>
        <input
          type="text"
          name="name"
          className={css.input}
          value={name}
          id="nameInput"
          onChange={handleChange}
        />
      </div>
      <div className={css.formGroup}>
        <label className={css.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          className={css.input}
          value={email}
          id="emailInput"
          onChange={handleChange}
        />
        <div className={css.smallText}>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className={css.formGroup}>
        <label className={css.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          className={css.input}
          value={password}
          id="passwordInput"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={css.button} disabled={!name || !email || !password}>Register</button>
      <Link to='/login' className={css.link}>Log In</Link>
    </form>
  );
};
