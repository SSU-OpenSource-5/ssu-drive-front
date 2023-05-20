import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import { IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { SvgIcon } from '@mui/material';
import { ReactComponent as Avatar } from '../../assets/icons/avatar.svg';
import { ReactComponent as Bell } from '../../assets/icons/bell.svg';

import React from 'react';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Appbar = () => {
  return (
    <AppBar position="sticky" color="secondary" elevation={1}>
      <Toolbar
        sx={{
          height: 54,
        }}
      >
        <SvgIcon
          component={Avatar}
          sx={{
            marginRight: 0.5,
          }}
        />
        <Typography component="div" sx={{ flexGrow: 1 }}>
          홍길동
        </Typography>
        <Tooltip title="알림">
          <IconButton sx={{ p: 0 }}>
            <SvgIcon component={Bell} />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
