import { Outlet } from 'react-router-dom';

import BottomNavbar from '../components/BottomNavbar';

export default function Root() {
  return (
    <>
      <Outlet />
      <BottomNavbar />
    </>
  );
}
