// import { useAuth } from 'hooks';

import { Navigation } from 'components/Navigation/Navigation';
// import { AuthNav } from 'components/AuthNav';
// import { UserMenu } from 'components/UserMenu';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
   
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'colors.accent',
      }}
    >
      <Toolbar
        sx={{
          flex: 1,
          justifyContent: 'space-around',
        }}
      >
        <Navigation />

        <Typography
          variant="h6"
          component="p"
          sx={{
            textTransform: 'uppercase',
            fontSize: 28,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
        
        </Typography>
      {/* если залогинен ->UserMenu, нет? ->AuthNav*/}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { useAuth } from '../../hooks/useAuth';
// import { Box, Flex, Spacer } from '@chakra-ui/react';

// export const Header = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <Box
//       bgGradient="linear(to-l, #7928CA, #FF0080)"
//       color="white"
//       py={4}
//       px={8}
//     >
//       <Flex alignItems="center">
//         <Navigation />
//         <Spacer />
//         {isLoggedIn ? <UserMenu /> : <AuthNav />}
//       </Flex>
//     </Box>
//   );
// };