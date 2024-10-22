import './App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import Page404 from './components/Page404.jsx';
import FileLoader from './fileLoaderLand/FileLoader.jsx';
import BusinessCard from './businessCard/BusinessCard.jsx';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Page404 />,
  },
]);

  return (
     <RouterProvider router={router} />
  );
}

export default App;
