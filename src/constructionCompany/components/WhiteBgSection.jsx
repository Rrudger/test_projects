const WhiteBgSection = () => {
  return (
    <div className='flex flex-col gap-y-8'>
    <div className={`
      overflow-visible z-20
      flex flex-row justify-center
      mt-16 ml-[200px] gap-x-8
      text-center text-cc_black text-lg
      `}>

      <div className='w-64 h-64 grid place-content-center translate-x-full'>
        <img className='rotate-45' src='./assets/cc_mat_formula_1.png' />
      </div>
      <div className={`
        translate-x-[288px] -translate-y-[288px]
        border border-cc_grey bg-white w-64 h-64
        `}>
        <div className='rotate-45 w-full h-full grid place-content-center gap-y-4'>
        <div>
          Project consulting
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className='border border-cc_grey w-64 h-64'>
        <div className='rotate-45 w-full h-full grid place-content-center gap-y-4'>
        <div>
          Location analysis and feasibility studies
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className='border border-cc_grey w-64 h-64'>
        <div className='rotate-45 w-full h-full grid place-content-center gap-y-4'>
        <div>
          Structural design and execution planning
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className='border border-cc_grey w-64 h-64'>
        <div className='rotate-45 w-full h-full grid place-content-center gap-y-4'>
        <div>
          Preparation of contract award
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className='border border-cc_grey w-64 h-64'>
        <div className='rotate-45 w-full h-full grid place-content-center gap-y-4'>
        <div>
          Service and Support
        </div>
        <div className='flex justify-center'>
          <img className='h-3 w-3' src='./assets/cc_plus.png' />
        </div>
        </div>
      </div>

      <div className={`
        -translate-x-[576px] translate-y-[288px]
        border border-cc_grey w-64 h-64
      `}>
        <div className='rotate-45 w-full h-full grid place-content-center gap-y-4'>
          <div>
            Construction site consulting
          </div>
          <div className='flex justify-center'>
            <img className='h-3 w-3' src='./assets/cc_plus.png' />
          </div>
        </div>
      </div>

      <div className='w-64 h-64 grid place-content-center -translate-x-full'>
        <img className='rotate-45' src='./assets/cc_mat_formula_2.png' />
      </div>

    </div>

      <div className='flex justify-center'>
        <img className='translate-y-1/2 -translate-x-1/4 rotate-45 z-0' src='./assets/cc_sketch_image.png' />
      </div>
    </div>
  )
};

export default WhiteBgSection;
