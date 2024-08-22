// Add react-router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './pages/Root';
import HomePage from './pages/HomePage';
import LabelsPage from './pages/LabelsPage';

// create router with JSX Route elements
const appRouter = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route path='/' element={<HomePage/>} />
    <Route path='/labels' element={<LabelsPage/>} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
