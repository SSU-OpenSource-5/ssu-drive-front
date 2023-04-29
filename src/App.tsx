import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DrivingPage from './pages/DrivingPage';
import { Container } from './App.css';
import BottomNavigation from './components/BottomNavigation/BottomNaviagtion';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/drive',
    element: <DrivingPage />,
  },
]);

function App() {
  return (
    <div className={`App ${Container}`}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <BottomNavigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
