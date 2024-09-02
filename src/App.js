// Add react-router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './pages/Root';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

// create router with JSX Route elements
const appRouter = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
    <Route path='/' element={<HomePage/>} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
