

import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import styled from 'styled-components';

const UserMenuContainer = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
`;

const CenteredContent = styled.div`
  display: flex;
  align-items: center;
`;

const WelcomeText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2px;
`;

const LogoutButton = styled.button`
  font-weight: bold;
  color: blue;
  margin-left: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  transition: background-color 0.3s ease;
  font-size: 2rem;
  cursor: pointer;
  background-color: rgb(41, 14, 68);

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <CenteredContent>
        <WelcomeText>Welcome, {user.email}</WelcomeText>
        <LogoutButton onClick={() => dispatch(logOut())}>Log Out</LogoutButton>
      </CenteredContent>
    </UserMenuContainer>
  );
};
