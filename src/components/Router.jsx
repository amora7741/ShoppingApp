import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../components/Layout';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import ShopPage from './ShopPage';
import AboutPage from './AboutPage';
import CartPage from './CartPage';

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
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'cart',
          element: <CartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
