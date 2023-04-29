import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DrivingPage from './pages/DrivingPage';
import { Container } from './App.css';
import BottomNavigation from './components/BottomNavbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'drive',
        element: <DrivingPage />,
      },
    ],
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
