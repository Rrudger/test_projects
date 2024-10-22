import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import Page404 from './components/Page404.jsx';
import FileLoader from './fileLoaderLand/FileLoader.jsx';
import BusinessCard from './businessCard/BusinessCard.jsx';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route to="/" element={<MainPage />} />
          <Route path="/fileLoader" element={<FileLoader />} />
          <Route path='/businessCard' element={<BusinessCard />} />

            <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
