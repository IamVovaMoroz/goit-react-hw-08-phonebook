// import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';

// export const AuthNav = () => {
//   return (
//     <div>
//       <NavLink className={css.link} to="/register">
//         Register
//       </NavLink>
//       <NavLink className={css.link} to="/login">
//         Log In
//       </NavLink>
//     </div>
//   );
// };
// import { NavLink } from 'react-router-dom';
// import { Stack, Text } from '@chakra-ui/react';

// export const AuthNav = () => {
//   return (
//     <Stack direction="row" spacing={4}>
//       <NavLink
//         to="/register"
//         style={({ isActive }) => {
//           return {
//             fontWeight: isActive ? 'bold' : '',
//             color: isActive ? 'red' : 'white',
//           };
//         }}
//       >
//         <Text fontSize="lg">Register</Text>
//       </NavLink>
//       <NavLink
//         to="/login"
//         style={({ isActive }) => {
//           return {
//             fontWeight: isActive ? 'bold' : '',
//             color: isActive ? 'red' : 'white',
//           };
//         }}
//       >
//         <Text fontSize="lg">LogIn</Text>
//       </NavLink>
//     </Stack>
//   );
// };

import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing={4}>
      <NavLink
        to="/register"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : '',
          color: isActive ? 'red' : 'white',
        })}
      >
        <Typography variant="body1" fontSize="1.25rem">
          Register
        </Typography>
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : '',
          color: isActive ? 'red' : 'white',
        })}
      >
        <Typography variant="body1" fontSize="1.25rem">
          LogIn
        </Typography>
      </NavLink>
    </Stack>
  );
};
