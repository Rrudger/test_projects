import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import Page404 from './components/Page404.jsx';
import FileLoader from './fileLoaderLand/FileLoader.jsx';
import BusinessCard from './businessCard/BusinessCard.jsx';

function App() {

  return (
    <HashRouter>
        <Routes>
          <Route to="/" element={<MainPage />} />
          <Route path="/fileLoader" element={<FileLoader />} />
          <Route path='/businessCard' element={<BusinessCard />} />

            <Route path="*" element={<MainPage />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
