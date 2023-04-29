import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DrivingPage from './pages/DrivingPage';
import { Container } from './App.css';

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
