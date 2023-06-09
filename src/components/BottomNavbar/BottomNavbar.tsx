import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import { ReactComponent as Cog } from '../../assets/icons/cog.svg';
import { ReactComponent as Film } from '../../assets/icons/film.svg';
import { ReactComponent as Auto } from '../../assets/icons/auto.svg';

import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { SvgIcon } from '@mui/material';

const BottomNavbar = ({ isLandscape = false }: { isLandscape?: boolean }) => {
  const [value, setValue] = React.useState(0);
  //const dynamicStyle = isLandscape
  //  ? {
  //      width: '100vh',
  //      height: '57px',
  //      top: 0,
  //      right: 0,
  //    }
  //  : {
  //      width: '100vw',
  //      height: '57px',
  //      bottom: 0,
  //      left: 0,
  //    };
  return (
    // TODO MAXWIDTH로 변경
    // <Box sx={{ pb: 7 }}>
    <Paper
      className="bottom-navbar-container"
      sx={{
        width: '100%',
        maxWidth: '390px',
        position: 'fixed',
        margin: '0 auto',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={useLocation().pathname}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          value="/"
          icon={<SvgIcon component={Home} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/drive"
          value="/drive"
          icon={<SvgIcon component={Auto} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/edit"
          value="/edit"
          icon={<SvgIcon component={Film} />}
        />
      </BottomNavigation>
    </Paper>
    // </Box>
  );
};
export default BottomNavbar;
