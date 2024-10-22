import './App.css';
import { BrowserRouter, HashRouter, Routes, Route, Router, Switch } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import Page404 from './components/Page404.jsx';
import FileLoader from './fileLoaderLand/FileLoader.jsx';
import BusinessCard from './businessCard/BusinessCard.jsx';

function App() {
  return (
    <BrowserRouter>
    <Router>
    <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/fileLoader">
            <FileLoader />
          </Route>
        </Switch>
        </Router>
      
      </BrowserRouter>
  );
}

export default App;
