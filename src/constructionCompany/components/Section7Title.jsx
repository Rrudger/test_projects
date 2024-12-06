const Section7Title = ({ title, variant }) => {
  return (
    <>
      <div className={variant ? 'absolute left-0 top-0' : 'absolute left-0'} >
        <div className='relative w-12 overflow-visible text-nowrap text-3xl font-light z-50'>
          {title}
        </div>
        <div className={`
          absolute -bottom-[8px] -left-[8px] scale-y-75
          text-transparent text-3xl bg-cc_secondary2
          `}>
          ******
        </div>
      </div>
    </>
  )
};

export default Section7Title;
