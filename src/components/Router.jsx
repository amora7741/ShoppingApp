import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import ShopPage from './ShopPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'shop',
          element: <ShopPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
