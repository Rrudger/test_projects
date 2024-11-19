const WhiteBgSection = () => {
  return (
    <div className='flex flex-col lg:gap-y-8 sm:gap-y-4 gap-y-2'>
    <div className={`
      overflow-visible z-20
      flex flex-row justify-center
      lg:mt-16 sm:mt-8 mt-4 lg:ml-[200px] sm:ml-[350px] ml-auto
      lg:gap-x-8 sm:gap-x-4 gap-x-2
      text-center text-cc_black lg:text-lg sm:text-sm text-[8px]
      `}>

      <div className={`
        grid lg:justify-end
        translate-x-full
        lg:w-64 lg:h-64 sm:w-36 sm:h-36 w-20 h-20
        `}>
        <img className='rotate-45' src='./assets/cc_mat_formula_1.png' />
      </div>

      <div className={`
        lg:translate-x-[288px] sm:translate-x-[160px] translate-x-[88px]
        lg:-translate-y-[288px] sm:-translate-y-[160px] -translate-y-[88px]
        border border-cc_grey bg-white
        lg:w-64 lg:h-64 sm:w-36 sm:h-36 w-20 h-20
        `}>
        <div className={`
          rotate-45 w-full h-full
          grid place-content-center sm:gap-y-4
          `}>
        <div>
          Project consulting
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className={`
        border border-cc_grey
        lg:w-64 lg:h-64 sm:w-36 sm:h-36 w-20 h-20
        `}>
        <div className={`
          rotate-45 w-full h-full
          grid place-content-center sm:gap-y-4
            `}>
        <div>
          Location analysis and feasibility studies
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className={`
        border border-cc_grey
        lg:w-64 lg:h-64 sm:w-36 sm:h-36 w-20 h-20
        `}>
        <div className={`
          rotate-45 w-full h-full
          grid place-content-center sm:gap-y-4
          `}>
        <div>
          Structural design and execution planning
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className={`
        border border-cc_grey
        lg:w-64 lg:h-64 sm:w-36 sm:h-36 w-20 h-20
        `}>
        <div className={`
          rotate-45 w-full h-full
          grid place-content-center sm:gap-y-4
          `}>
        <div>
          Preparation of contract award
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className={`
        border border-cc_grey
        lg:w-64 lg:h-64 sm:w-36 sm:h-36 w-20 h-20
        `}>
        <div className={`
          rotate-45 w-full h-full
          grid place-content-center sm:gap-y-4
          `}>
        <div>
          Service and Support
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className={`
        lg:-translate-x-[576px] sm:-translate-x-[320px] -translate-x-[176px]
        lg:translate-y-[288px] sm:translate-y-[160px] translate-y-[88px]
        border border-cc_grey
        lg:w-64 lg:h-64 sm:w-36 sm:h-36 w-20 h-20
      `}>
        <div className={`
          rotate-45 w-full h-full
          grid place-content-center sm:gap-y-4
          `}>
          <div>
            Construction site consulting
          </div>
          <div className='flex justify-center'>
            <img className='h-3 w-3' src='./assets/cc_plus.png' />
          </div>
        </div>
      </div>

      <div className={`
        grid place-content-center -translate-x-full
        lg:w-64 lg:h-64 sm:w-36 sm:h-36 w-20 h-20
        `}>
        <img className='rotate-45' src='./assets/cc_mat_formula_2.png' />
      </div>

    </div>

      <div className='flex justify-center'>
        <img className={`
          lg:w-[700px] lg:h-[500px] sm:w-[350px] sm:h-[250px] w-[175px] h-[125px]
          lg:translate-y-1/4 sm:translate-y-0 translate-y-0
          lg:translate-x-1/4 sm:translate-x-1/4 translate-x-full
          rotate-45 z-0
          `}
          src='./assets/cc_sketch_image.png' />
      </div>
    </div>
  )
};

export default WhiteBgSection;
