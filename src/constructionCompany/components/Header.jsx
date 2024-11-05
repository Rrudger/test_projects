const Header = () => {
  return (
    <div className={`
      absolute top-0 z-50
      w-full py-8 lg:pl-12 lg:pr-0 px-4
      flex flex-row flex-wrap lg:gap-y-4 sm:gap-y-8 gap-y-4 items-center justify-between
      text-white text-lg capitalize
      `}>
      <div className='sm:order-1 order-2 sm:w-auto w-full flex justify-center'>
        <img className='h-11' src='./assets/cc_logo.svg' />
      </div>
      <div className={`
        lg:order-2 order-2
        lg:w-auto w-full
        sm:mt-0 mt-0
        flex sm:flex-row flex-col sm:gap-y-2 justify-center items-center gap-x-6
        `}>
        <div className='flex flex-row gap-x-6'>
          <div className='cursor-pointer'>
            services
          </div>
          <div className='cursor-pointer'>
            know how
          </div>
          <div className='cursor-pointer'>
            projects & references
          </div>
        </div>
        <div className='flex flex-row gap-x-6'>
          <div className='cursor-pointer'>
            our company
          </div>
          <div className='cursor-pointer'>
            our clients
          </div>
          <div className='cursor-pointer'>
            careers
          </div>
        </div>

      </div>
      <div className='lg:order-3 order-1 sm:w-auto w-full flex flex-row justify-between'>
        <button className='bg-cc_secondary hover:bg-cc_secondary_hover h-14 w-36 mr-4'>
          contact us
        </button>
        <div className='flex flex-row items-center gap-x-4 px-4 bg-white text-cc_primary h-14'>
          <div className='flex flex-row items-center group cursor-pointer gap-x-2'>
            <img className='h-3' src='./assets/flag_de.svg' />
            <div className='opacity-40 group-hover:opacity-100'>
              de
            </div>
          </div>
          <div className='flex flex-row items-center cursor-pointer gap-x-2'>
            <img className='h-3' src='./assets/flag_en.svg' />
            <div>
              en
            </div>
          </div>
          <div className='flex group flex-row items-center cursor-pointer gap-x-2'>
            <img className='h-3' src='./assets/flag_fr.svg' />
            <div className='opacity-40 group-hover:opacity-100'>
              fr
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
