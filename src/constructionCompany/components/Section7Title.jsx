const Section7Title = ({ title }) => {
  return (
    <div className='relative ml-40 mb-16 -rotate-90'>
      <div className='absolute right-0'>
        <div className='relative text-nowrap text-3xl font-light z-50'>
          {title}
        </div>
        <div className={`
          absolute -bottom-[8px] -left-[8px] scale-y-75
          text-transparent text-3xl bg-cc_secondary2
          `}>
          ******
        </div>
      </div>
    </div>
  )
};

export default Section7Title;
