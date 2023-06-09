import { Outlet } from 'react-router-dom';

import BottomNavbar from '../components/BottomNavbar';
import AppBar from '../components/Appbar';

export default function Root() {
  return (
    <>
      <AppBar />
      <Outlet />
      <BottomNavbar />
    </>
  );
}
