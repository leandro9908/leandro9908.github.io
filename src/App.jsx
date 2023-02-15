import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import VirtualReality from './pages/VirtualReality';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/vr',
    element: <VirtualReality />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
