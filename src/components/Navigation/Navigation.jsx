

import React from 'react';

import { useAuth } from '../../hooks/useAuth';

import { NavItem, HomeLink, NavContainer } from './Navigation.styled';



export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <HomeLink to="/" isactive={window.location.pathname === '/' ? 'true' : 'false'}>
        Home
      </HomeLink>
      {isLoggedIn && (
        <NavItem
          to="/contacts"
          isactive={window.location.pathname === '/contacts' ? 'true' : 'false'}
        >
          Contacts
        </NavItem>
      )}
    </NavContainer>
  );
};
