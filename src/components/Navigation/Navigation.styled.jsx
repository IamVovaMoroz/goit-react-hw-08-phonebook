import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-weight: ${({ isactive }) => (isactive ? 'bold' : '')};
  color: ${({ isactive }) => (isactive ? 'blue' : 'white')};
  margin-right: 1rem;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  transition: background-color 0.3s ease;
  font-size: 2rem;

  &:hover {
    background-color: ${({ isactive }) => (isactive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.034)')};
  }
`;

export const HomeLink = styled(NavItem)`
  margin-right: 20px;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem;
`;