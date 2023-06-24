// import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { register } from 'redux/auth/operations';
// import css from './LoginForm.module.css';
// import { Link } from 'react-router-dom';

// export const LoginForm = () => {
//   // const dispatch = useDispatch();

//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleChange = ({ target: { value, name } }) => {
//     name === 'email' ? setEmail(value) : setPassword(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log('email, password', { email, password });
//     console.log('Email:', email);
//     console.log('Password:', password);

//     // dispatch(
//     //   register({
//     //     name,
//     //     email,
//     //     password,
//     //   })
//     // );

   
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <form className={`${css.form} ${css.blue}`} onSubmit={handleSubmit} autoComplete="off">
     
//       <div className={css.formGroup}>
//         <label className={css.label}>
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           className={css.input}
//           value={email}
//           id="emailInput"
//           onChange={handleChange}
//         />
//         {/* <div className={css.smallText}>
//           We'll never share your email with anyone else.
//         </div> */}
//       </div>
//       <div className={css.formGroup}>
//         <label className={css.label}>
//           Password
//         </label>
//         <input
//           type="password"
//           name="password"
//           className={css.input}
//           value={password}
//           id="passwordInput"
//           onChange={handleChange}
//         />
//       </div>
      
//       <button type="submit" className={css.button} disabled={!email || !password}>Log In</button>
//       <Link to='/register' className={css.link}>Register</Link>
//     </form>
//   );
// };

import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  // const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // dispatch(
    //   register({
    //     name,
    //     email,
    //     password,
    //   })
    // );

    setEmail('');
    setPassword('');
  };

  return (
    <form className={`${css.form} ${css.blue}`} onSubmit={handleSubmit} autoComplete="off">
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
        {/* <div className={css.smallText}>
          We'll never share your email with anyone else.
        </div> */}
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
      
      <button type="submit" className={css.button} disabled={!email || !password}>Log In</button>
      <Link to='/register' className={css.link}>Register</Link>
    </form>
  );
};
