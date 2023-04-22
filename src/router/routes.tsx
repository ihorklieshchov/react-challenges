import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Challanges } from './challanges';
import { ErrorPage } from './components/ErrorPage';
import { MainLayout } from './components/MainLayout';
import { IndexPage } from './components/IndexPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <IndexPage /> },
      ...Challanges.map((challange) => ({
        path: `challange/${challange.path}`,
        element: challange.element,
      })),
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
