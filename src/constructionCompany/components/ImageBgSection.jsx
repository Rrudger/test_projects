import WhiteBgSection from './WhiteBgSection.jsx';

const ImageBgSection = () => {
  return (
    <div className={`
      absolute w-full opacity-100 z-50
      sm:mt-48 mt-56 lg:mx-24 mx-8
      flex lg:flex-row flex-col text-white
      `}>
      <div className='lg:mt-16 sm:mt-0 mt-10'>
        <div className='lg:text-[64px] sm:text-5xl sm:leading-snug leading-tight text-3xl text-nowrap'>
          Civil <span className='font-bold'>Engineering Solutions </span><br/>
          For The <span className='font-bold'>Cement </span> Industry
        </div>
        <div className='my-8 flex flex-col gap-y-4 sm:leading-snug leading-tight sm:text-[25px] text-base'>
          <div>
          We are your leading partner for complex brownfield<br/>
           construction projects during ongoing operation.
          </div>
          <div>
          Benefit from engineering excellence built on<br/>
          more than 30 years of industry experience.
          </div>
        </div>
        <div className='flex flex-row gap-x-4 h-12'>
          <button className={`
            py-2 px-4 hover:bg-white hover:text-cc_primary
            border-2 border-white font-semibold
            `}>
            How can we serve you
          </button>
          <button className={`
            py-2 px-8 hover:bg-cc_grey hover:text-white
            bg-white text-cc_primary font-semibold
            `}>
            Contact us
          </button>
        </div>
      </div>

      <div className={`
        overflow-visible
        sm:text-[22px] font-black
        grid grid-cols-2 lg:gap-x-8 lg:gap-y-8
        lg:mt-32 sm:mt-4 lg:ml-[300px] sm:ml-28
        -rotate-45
        lg:w-auto w-1/2
        lg:translate-x-0 sm:translate-x-2/3 translate-x-2/4
        lg:translate-y-0 sm:-translate-y-1/4 translate-y-1/4
        `}>
        <div className='relative sm:h-32 h-16 sm:w-32 w-16 '>
          <div className={`
            z-40 absolute
            h-full w-full border border-cc_secondary
            -inset-x-4 -inset-y-4
            `}>
          </div>
          <div className={`
            relative z-50
            h-full w-full grid place-content-center
            border-8 border-cc_primary bg-cc_primary/50
            `}>
            <span className='rotate-45'>Agil.</span>
          </div>
        </div>
        <div className='relative sm:h-40 h-20 sm:w-40 w-20'>
          <div className={`
            z-40 absolute
            h-full w-full border border-white
            inset-x-4 -inset-y-4
            `}>
          </div>
          <div className={`
            relative z-50
            h-full w-full grid place-content-center
            border-8 border-white bg-cc_primary/50
            `}>
            <span className='rotate-45'>Ganzheitlich.</span>
          </div>
        </div>
        <div className='relative sm:h-44 h-24 sm:w-44 w-24 mt-6'>
          <div className={`
            z-40 absolute
            h-full w-full border border-white
            -inset-x-4 inset-y-4
            `}>
          </div>
          <div className={`
            relative z-50
            h-full w-full grid place-content-center
            border-8 border-cc_secondary bg-cc_primary/50
            `}>
            <span className='rotate-45'>Zuverlässig.</span>
          </div>
        </div>
        <div className={`
          relative
          lg:inset-x-[110px] lg:inset-y-[110px]
          h-44 w-44 mt-8 ml-6
          `}>
          <div className={`
            z-40 absolute
            h-[600px] w-[600px] border border-white
            -inset-x-4 inset-y-4
            `}>
          </div>
          <div className={`
            z-40 absolute
            h-[600px] w-[600px] border border-cc_secondary
            inset-x-4 -inset-y-4
            `}>
          </div>
          <div className={`
            absolute z-50 opacity-95
            font-black text-[22px]
            h-[600px] w-[600px]
            bg-cc_secondary
            `}>
          </div>
        </div>
        <div className={`
          relative lg:inset-x-[350px] col-span-2 mt-10 overflow-visible
          `}>

          <div id='white_sec' className={`
            absolute right-0 z-40 bg-white
            lg:h-[2500px] lg:w-[3000px]
            sm:h-[2000px] sm:w-[2000px]
            h-[800px] w-[1200px]
          `}>
          <WhiteBgSection />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ImageBgSection;
