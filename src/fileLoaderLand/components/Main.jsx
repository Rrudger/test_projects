import LeftPart from './LeftPart.jsx';
import RightPart from './RightPart.jsx';

const Main = () => {
  return (
    <div className='mt-24 grid grid-cols-1 justify-items-center'>
      <div className='w-3/4 grid grid-cols-2 gap-x-12 justify-items-center divide-grey divide-x'>
        <LeftPart />
        <RightPart />
      </div>
    </div>
  )
};

export default Main;
