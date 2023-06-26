

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