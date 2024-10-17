import './css/test.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import ProgressBar from './components/ProgressBar.jsx';

const FileLoader = () => {
  return (
    <div className='test h-screen font-montserrat'>
      <Header />
      <ProgressBar />
      <Main />
    </div>
  )
};

export default FileLoader;
