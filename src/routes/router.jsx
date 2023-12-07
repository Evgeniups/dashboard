import {createBrowserRouter} from 'react-router-dom';

import Layout from '../layout/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Product from '../pages/Product/Product';
import Customers from '../pages/Customers/Customers';
import Income from '../pages/Income/Income';
import Promote from '../pages/Promote/Promote';
import Help from '../pages/Help/Help';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {path: '/product', element: <Product />},
        {path: '/customers', element: <Customers />},
        {path: '/income', element: <Income />},
        {path: '/promote', element: <Promote />},
        {path: '/help', element: <Help />},
        {path: '*', element: <NotFoundPage />}
      ]
    }
  ],
  {basename: '/dashboard'}
);
