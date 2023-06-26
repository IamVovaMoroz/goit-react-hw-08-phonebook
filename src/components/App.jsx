
// import React, { lazy, useEffect } from 'react';
// import { NavLink, Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout/Layout';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks/useAuth';
// import { useDispatch } from 'react-redux';
// import { RestrictedRoute } from './UserMenu/RestictedRoute';
// import { PrivateRoute } from './UserMenu/PrivateRoute';

// const HomePage = lazy(() => import('pages/HomePage'));
// const ContactsPage = lazy(() => import('pages/ContactsPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));

// const App = () => {
//   // для того чтобы не вылетало с logout, при перезагрузке. 
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();
//   // Доп запрос и проверка
//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);


//   return ( isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//         margin: '30px',
//       }}
//     >
//       <nav>
//         <NavLink to="/" end style={{ marginRight: '10px' }}></NavLink>
//         <NavLink to="/register" style={{ marginRight: '10px' }}></NavLink>
//         <NavLink to="/login" style={{ marginRight: '10px' }}></NavLink>
//         <NavLink to="/contacts" style={{ marginRight: '10px' }}></NavLink>
//         <NavLink to="/info" style={{ marginRight: '10px' }}></NavLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//           <Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
       
//           <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
//           <Route path="login" element={ <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
//         </Route>
//       </Routes>
//     </div>)
//   );
// };

// export default App;




// РАБОТАЕТ без ленивой

// import { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import ContactsPage from 'pages/ContactsPage';
// import HomePage from 'pages/HomePage';
// import { Layout } from 'components/Layout/Layout';
// import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks/useAuth';
// import { refreshUser } from 'redux/auth/operations';
// import LoginPage from 'pages/LoginPage';
// import RegisterPage from 'pages/RegisterPage';
// import { PrivateRoute } from './UserMenu/PrivateRoute';
// import { RestrictedRoute } from './UserMenu/RestictedRoute';




// const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="/contacts"
//           element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
//         />
//         <Route
//           path="/register"
//           element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
//         />
//         <Route
//           path="/login"
//           element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
//         />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import Register from 'pages/RegisterPage';
import Login from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import { RestrictedRoute } from './UserMenu/RestictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
      </Route>
    </Routes>
  );
};