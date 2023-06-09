import theme from './theme';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DrivingPage from './pages/DrivingPage';
import EndDrivingPage from './pages/EndDrivingPage';

import { Container } from './App.css';
import { ThemeProvider } from '@mui/material/styles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/drive',
    element: <DrivingPage />,
  },
  {
    path: '/finish-drive',
    element: <EndDrivingPage />,
  },
]);

function App() {
  return (
    <div className={`App ${Container}`}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
