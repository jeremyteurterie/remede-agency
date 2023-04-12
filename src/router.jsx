import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error404 from './pages/Error404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error404 />}></Route>
      <Route
        path="/signin"
        element={<SignIn />}
        errorElement={<Error404 />}
      ></Route>
      <Route
        path="/user"
        element={<User />}
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
