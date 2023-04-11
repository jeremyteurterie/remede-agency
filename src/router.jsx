import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Error404 from './pages/Error404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Error404 />}>
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
