import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

const BusinessCard = () => {
  return (
    <div className='flex flex-col justify-center items-center text-bc_primary font-poppins'>
      <Header />
      <Main />
    </div>
  )
};

export default BusinessCard;
