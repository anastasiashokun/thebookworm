import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Routes from './routes.enum';
import HomePage from '../../components/Home/home.tsx';
import Layout from '../../components/Layout/layout.tsx';


function getPrivateRoutes() {
  return [
    {
      path: Routes.Home,
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),

    },
  ];
}

const useRouter = () => {
  return createBrowserRouter(
    [
      {
        path: Routes.App,
        element: (
            <div>
                <Outlet />
            </div>
        ),

        children: [
          ... getPrivateRoutes(),

          {
            path: '/App',
            element: 'aaa'
          },
          {
            path: '*',
            element: (
                <Navigate to={Routes.Home} />
            ),
          },
        ],
      },


    ],
  );
};

export default useRouter;