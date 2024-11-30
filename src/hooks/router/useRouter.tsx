import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Routes from './routes.enum';
import HomePage from '../../components/Home/home.tsx';
import Layout from '../../components/Layout/layout.tsx';
import DetectivesPage from '../../components/Genres/Detectives/detectives.tsx';
import RomancePage from '../../components/Genres/Romance/romance.tsx';
import PsychologyPage from '../../components/Genres/Psychology/psychology.tsx';
import HorrorPage from '../../components/Genres/Horror/horror.tsx';
import FantasyPage from '../../components/Genres/Fantasy/fantasy.tsx';


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
    {
      path: Routes.Detectives,
      element: (
        <Layout>
          <DetectivesPage />
        </Layout>
      ),

    },
    {
      path: Routes.Psychology,
      element: (
        <Layout>
          <PsychologyPage />
        </Layout>
      ),

    },
    {
      path: Routes.Romance,
      element: (
        <Layout>
          <RomancePage />
        </Layout>
      ),

    },
    {
      path: Routes.Horror,
      element: (
        <Layout>
          <HorrorPage />
        </Layout>
      ),

    },
    {
      path: Routes.Fantasy,
      element: (
        <Layout>
          <FantasyPage />
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
            path: '*',
            element: (
                <Navigate to={Routes.Home} />
            ),
          },
        ],
      },
      {
        index: true,
        element: <Navigate to={Routes.Home} />,
      },
    ],
  );
};

export default useRouter;