import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Challenges } from './challenge';
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
      ...Challenges.map((challenge) => ({
        path: `challenge/${challenge.path}`,
        element: challenge.element,
      })),
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
