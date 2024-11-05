import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import Page404 from './components/Page404.jsx';
import FileLoader from './fileLoaderLand/FileLoader.jsx';
import BusinessCard from './businessCard/BusinessCard.jsx';
import ConstructionCompany from './constructionCompany/ConstructionCompany.jsx';

function App() {

  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/fileLoader" element={<FileLoader />} />
          <Route path='/businessCard' element={<BusinessCard />} />
          <Route path='/constructionCompany' element={<ConstructionCompany />} />

            <Route path="*" element={<Page404 />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
