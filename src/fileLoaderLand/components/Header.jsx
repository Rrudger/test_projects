import Icon from '../assets/person-lines-fill.svg';

const Header = () => {
  return (
    <div className='sticky top-0 h-20 bg-dark flex justify-between items-center text-white'>
      <div className='font-extrabold ml-8'>
        VSLOptimizer
      </div>
      <div className='flex items-center divide-grey divide-x'>
        <div className='pr-2 font-semibold text-sm'>
         Credits Remaining: 10
        </div>
        <div className='pl-2 mr-8'>
          <Icon />
        </div>
      </div>
    </div>
  )
};

export default Header;
