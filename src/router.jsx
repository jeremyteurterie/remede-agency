import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import UserConnexion from './pages/UserConnexion';
import UserProfil from './pages/UserProfil';
import Error404 from './pages/Error404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error404 />}></Route>
      <Route
        path="/connexion"
        element={<UserConnexion />}
        errorElement={<Error404 />}
      ></Route>
      <Route
        path="/profil"
        element={<UserProfil />}
        errorElement={<Error404 />}
      ></Route>
      <Route path="*" element={<Error404 />}></Route>
    </>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
