import Slides from './Slides.jsx';

const Section3 = () => {
  const w = window.screen.width;

  return (
    <div className='relative h-full z-50 flex flex-col text-center text-lg leading-tight'>
      <div className='lg:mt-24 -mt-80 flex flex-col items-center'>
        <div className='text-cc_grey font-semibold'>
          <div>
            Scroll to find out how our<br/> expertise can help you
          </div>
          <div className='flex justify-center mt-4'>
            <img src='./assets/cc_rectangle.svg' />
          </div>
        </div>
        <div className='flex flex-col lg:w-1/4 sm:w-1/2 sm:mt-24 mt-40 lg:mb-12'>
          <div className='text-4xl font-bold'>
            Broad expertise based on decades of experience
          </div>
          <div className='text-cc_grey mt-4 px-8'>
          Our services include all types of construction projects that you encounter.
          </div>
        </div>
      </div>
      <div className={`
        lg:h-1/2 sm:h-full h-3/4 lg:mt-0 sm:mt-20 mt-auto relative overflow-hidden
      `}>
        <div
          style={{width: `${w + w/10}px`}}
          className={`
          absolute bottom-0 w-full h-1/4
          bg-cc_primary origin-top-left rotate-[3deg]
          `}>
        </div>
        <div
          style={{width: `${w + w/10}px`}}
          className={`
          absolute z-10 bottom-0 h-1/4 w-[${w + w/10}px]
          bg-[#FF7C40]
          origin-top-left rotate-[-3deg]
          inset-y-full
          `}>
        </div>
        <div
          className={`
          absolute z-20 bottom-0 w-full h-1/3
          bg-cc_secondary origin-bottom-left rotate-[7deg]
          lg:inset-x-[650px] md:inset-x-[150px]
          -skew-x-[65deg]
          `}>
        </div>
        <div className={`
        absolute z-30 bottom-0 w-full h-1/4
        lg:bg-cc_primary sm:bg-[#FF7C40] origin-bottom-left rotate-[7deg]
        lg:inset-x-[630px] md:inset-x-[100px]
        -skew-x-[75deg]
        `}>
        </div>
        <Slides />

      </div>
    </div>
  )
};

export default Section3;
