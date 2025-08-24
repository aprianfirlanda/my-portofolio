import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout.jsx';
import Home from '../features/home/pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import Projects from '../features/home/pages/Projects.jsx';

const index = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default index;
