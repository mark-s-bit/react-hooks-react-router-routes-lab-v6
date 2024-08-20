import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><NavBar /><Home /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/directors',
    element: <><NavBar /><Directors /></>,
  },
  {
    path: '/actors',
    element: <><NavBar /><Actors /></>,
  },
  {
    path: '/movie/:id',
    element: <><NavBar /><Movie /></>,
  },
]);

export default router;
