import MainLeft from './MainLeft.jsx';
import MainRight from './MainRight.jsx';

const Main = () => {
  return (
    <div className={`
      flex sm:flex-row flex-col
      w-screen
      -mt-[60px]
      `}>
      <MainLeft />
      <MainRight />
    </div>
  )
};

export default Main;
