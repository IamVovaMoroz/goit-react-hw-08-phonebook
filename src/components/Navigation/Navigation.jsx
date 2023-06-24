// import { NavLink } from 'react-router-dom';

// import { Box, Button } from '@mui/material';

// export const Navigation = () => {
//   return (
//     <Box component="div" sx={{ display: 'flex', gap: 4 }}>
      
//       <NavLink to="/">
//         <Button
//           color="inherit"
//           variant="outlined"
//           sx={{
//             color: 'colors.dark',
//             outline: 'none',
//             fontSize: 16,
//             px: 3,
//             '&:hover': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//             '&.active': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//           }}
//         >
//           Home
//         </Button>
//       </NavLink>

//       <NavLink to="/register">
//         <Button
//           color="inherit"
//           variant="outlined"
//           sx={{
//             color: 'colors.dark',
//             outline: 'none',
//             fontSize: 16,
//             px: 3,
//             '&:hover': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//             '&.active': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//           }}
//         >
//           Register
//         </Button>
//       </NavLink>

//       <NavLink to="/login">
//         <Button
//           color="inherit"
//           variant="outlined"
//           sx={{
//             color: 'colors.dark',
//             outline: 'none',
//             fontSize: 16,
//             px: 3,
//             '&:hover': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//             '&.active': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//           }}
//         >
//           Login
//         </Button>
//       </NavLink>

//       {/* <NavLink to="/contacts">
//         <Button
//           color="inherit"
//           variant="outlined"
//           sx={{
//             color: 'colors.dark',
//             outline: 'none',
//             fontSize: 16,
//             px: 3,
//             '&:hover': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//             '&.active': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//           }}
//         >
//           Contacts
//         </Button>
//       </NavLink>

//       <NavLink to="/info">
//         <Button
//           color="inherit"
//           variant="outlined"
//           sx={{
//             color: 'colors.dark',
//             outline: 'none',
//             fontSize: 16,
//             px: 3,
//             '&:hover': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//             '&.active': {
//               backgroundColor: 'colors.grey',
//               color: 'colors.aqua',
//               border: '1px solid transparent',
//             },
//           }}
//         >
//           Info
//         </Button>
//       </NavLink> */}
//     </Box>
//   );
// };

import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Text } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav" alignItems="center" padding="1rem">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? 'blue' : 'white',
          };
        }}
      >
        <Text fontSize="lg" mr="1rem">
          Home
        </Text>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isActive ? 'blue' : 'white',
            };
          }}
        >
          <Text fontSize="lg" mr="1rem">
            Contacts
          </Text>
        </NavLink>
      )}
    </Flex>
  );
};