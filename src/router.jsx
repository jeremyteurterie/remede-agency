import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// pages
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserProfil from './pages/UserProfil';
import Error404 from './pages/Error404';

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error404 />}></Route>
      <Route
        path="/login"
        element={<UserLogin />}
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
  return <RouterProvider router={Routes} />;
}

export default Router;
