
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #D3D3D3, #FFFF00, #FFC0CB)',
        minHeight: '100vh',
        padding: '4px',
      }}
    >
      <AppBar />
      <Outlet />
    </div>
  );
};
