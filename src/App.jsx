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
          <Route exact path="*" element={<Page404 />} />
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/fileLoader" element={<FileLoader />} />
          <Route exact path='/businessCard' element={<BusinessCard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
