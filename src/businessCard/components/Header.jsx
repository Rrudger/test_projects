const Header = () => {
  return (
    <div className={`sm:w-3/4 w-11/12 sm:h-16 h-24 px-2 py-2 sticky inset-y-[30px] z-40
    bg-bc_primary rounded-full capitalize text-white
    flex flex-col gap-y-2 justify-between items-center
    `}>
      <div className='sm:hidden'>
        <img className='h-8' src='./assets/bc_logo.png' />
      </div>
      <div className='w-full sm:h-full h-1/2 sm:my-0 my-1 flex flex-row justify-between items-center'>
        <button className='sm:block hidden capitalize h-full w-24 rounded-full bg-bc_secondary'>
          home
        </button>
        <div className='cursor-pointer sm:ml-0 ml-6'>
          service
        </div>
        <div className='sm:block hidden'>
          <img className='h-12' src='./assets/bc_logo.png' />
        </div>
        <div className='cursor-pointer'>
          project
        </div>
        <div className='cursor-pointer mr-6'>
          contact
        </div>
      </div>
      <button className='sm:hidden capitalize h-full w-24 rounded-full bg-bc_secondary'>
        home
      </button>
    </div>
  )
};

export default Header;
