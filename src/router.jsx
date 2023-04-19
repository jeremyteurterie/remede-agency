import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// pages
import Home from './pages/Home';
import UserConnexion from './pages/UserConnexion';
import UserProfil from './pages/UserProfil';
import Error404 from './pages/Error404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error404 />} />
      <Route
        path="/connexion"
        element={<UserConnexion />}
        errorElement={<Error404 />}
      />
      <Route
        path="/profil"
        element={<UserProfil />}
        errorElement={<Error404 />}
      />
      <Route path="*" element={<Error404 />} />
    </>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
