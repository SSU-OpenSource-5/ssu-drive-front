import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import { ReactComponent as Cog } from '../../assets/icons/cog.svg';
import { ReactComponent as Film } from '../../assets/icons/film.svg';
import { ReactComponent as Auto } from '../../assets/icons/auto.svg';

import { ReactComponent as Home } from '../../assets/icons/home.svg';

const BottomNavbar = () => {
  const [value, setValue] = React.useState(0);
  return (
    // TODO MAXWIDTH로 변경
    // <Box sx={{ pb: 7 }}>
    <Paper
      sx={{
        maxWidth: 390,
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
          to="/main"
          value="/main"
          label="홈"
          icon={<Home />}
        />
        <BottomNavigationAction
          component={Link}
          to="/drive"
          value="/drive"
          label="주행"
          icon={<Auto />}
        />
        {/* <BottomNavigationAction label="편집" icon={<Film />} />
        <BottomNavigationAction label="설정" icon={<Cog />} /> */}
      </BottomNavigation>
    </Paper>
    // </Box>
  );
};
export default BottomNavbar;
