// import ContactDetailsPage from "pages/ContactDetailsPage";
// import ContactsPage from "pages/ContactsPage";
// import Home from "pages/HomePage";
// import InfoPage from "pages/InfoPage";
// import LoginPage from "pages/LoginPage";
// import RegisterPage from "pages/RegisterPage";
// import {  NavLink, Route, Routes } from "react-router-dom";
// import { Layout } from "./Layout/Layout";
// import HomePage from "pages/HomePage";



// export const App = () => {
//   return (
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
// <nav>


//         <NavLink to="/" end style={{ marginRight: '10px' }}>
          
//         </NavLink>
//         <NavLink to="/register" style={{ marginRight: '10px' }}>
         
//         </NavLink>
//         <NavLink to="/login" style={{ marginRight: '10px' }}>
       
//         </NavLink>
//         <NavLink to="/contacts" style={{ marginRight: '10px' }}>
        
//         </NavLink>
//         <NavLink to="/info" style={{ marginRight: '10px' }}>
       
//         </NavLink>
//       </nav>

//      <Routes>
 
//      <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage/>} />
       
//         <Route path="contacts" element={<ContactsPage />} />
//         <Route path="contacts/:id" element={<ContactDetailsPage />} />
//         <Route path="info" element={<InfoPage />} />
//         {/* <Route path="*" element={<NotFound />} /> */}
//         <Route path="register" element={<RegisterPage />} />
//         <Route path="login" element={<LoginPage />} />

//           </Route>
        
//       </Routes>
//     </div>
//   );
// };
// import React, { lazy, Suspense } from 'react';
// import { NavLink, Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout/Layout';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));
// const ContactDetailsPage = lazy(() => import('../pages/ContactDetailsPage'));
// const InfoPage = lazy(() => import('../pages/InfoPage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));

// export const App = () => {
//   return (
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
//         <NavLink to="/" end style={{ marginRight: '10px' }}>
//           Home
//         </NavLink>
//         <NavLink to="/register" style={{ marginRight: '10px' }}>
//           Register
//         </NavLink>
//         <NavLink to="/login" style={{ marginRight: '10px' }}>
//           Login
//         </NavLink>
//         <NavLink to="/contacts" style={{ marginRight: '10px' }}>
//           Contacts
//         </NavLink>
//         <NavLink to="/info" style={{ marginRight: '10px' }}>
//           Info
//         </NavLink>
//       </nav>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<HomePage />} />
//             <Route path="contacts" element={<ContactsPage />} />
//             <Route path="contacts/:id" element={<ContactDetailsPage />} />
//             <Route path="info" element={<InfoPage />} />
//             <Route path="register" element={<RegisterPage />} />
//             <Route path="login" element={<LoginPage />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };
import React, { lazy, Suspense, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const ContactDetailsPage = lazy(() => import('pages/ContactDetailsPage'));
const InfoPage = lazy(() => import('pages/InfoPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

const App = () => {
  // для того чтобы не вылетало с logout, при перезагрузке. 
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // Доп запрос и проверка
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return ( isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: '30px',
      }}
    >
      <nav>
        <NavLink to="/" end style={{ marginRight: '10px' }}></NavLink>
        <NavLink to="/register" style={{ marginRight: '10px' }}></NavLink>
        <NavLink to="/login" style={{ marginRight: '10px' }}></NavLink>
        <NavLink to="/contacts" style={{ marginRight: '10px' }}></NavLink>
        <NavLink to="/info" style={{ marginRight: '10px' }}></NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
          <Route path="contacts" element={<Suspense fallback={<div>Loading...</div>}><ContactsPage /></Suspense>} />
          <Route path="contacts/:id" element={<Suspense fallback={<div>Loading...</div>}><ContactDetailsPage /></Suspense>} />
          <Route path="info" element={<Suspense fallback={<div>Loading...</div>}><InfoPage /></Suspense>} />
          <Route path="register" element={<Suspense fallback={<div>Loading...</div>}><RegisterPage /></Suspense>} />
          <Route path="login" element={<Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>} />
        </Route>
      </Routes>
    </div>)
  );
};

export default App;
