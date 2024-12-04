import { useEffect, useState } from 'react';
import Plus from '../icons/cc_plus.svg';
import Btns from './BtnsSection4.jsx';
import slides from '../texts/section4.js';

const Section4 = () => {
  const [ curSlide, setCurrent ] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll('.s4_slide');
    slides.forEach(el => {
      if (Number(el.id.slice(-1)) !== curSlide) {
        el.classList.add('text-cc_grey_text');
        el.classList.remove('text-cc_dark_grey', 'sm:col-span-2', 'col-span-4', 'order-1');
      } else {
        el.classList.remove('text-cc_grey_text')
        el.classList.add('text-cc_dark_grey', 'sm:col-span-2', 'col-span-4', 'order-1');
      }
    });
  },[curSlide]);

  const handleMouseEnter = (e) => {
    const id = e.target.closest('.s4_slide').id;
    if (id.slice(-1) !== curSlide) {
      const slide = document.getElementById(`sec4-slide-${curSlide}`);
      slide.classList.remove('sm:col-span-2', 'col-span-4', 'order-1');
    }
  };

  const handleMouseLeave = (e) => {
    const id = e.target.closest('.s4_slide').id;
    if (id.slice(-1) !== curSlide) {
      const slide = document.getElementById(`sec4-slide-${curSlide}`);
      slide.classList.add('sm:col-span-2', 'col-span-4', 'order-1');
    }
  };

  const handleClick = (e) => {
    setCurrent(Number(e.target.closest('.s4_slide').id.slice(-1)));
  };
  const handleBack = () => {
    setCurrent(curSlide === 0 ? slides.length - 1 : curSlide - 1);
  };
  const handleForward = () => {
    setCurrent(curSlide === slides.length - 1 ? 0 : curSlide + 1);
  };


  return (
    <div className='flex flex-col bg-white relative z-50'>
      <div className='grid lg:grid-cols-2 grid-cols-1 leading-tight'>
        <div className={`
          lg:mt-20 lg:ml-20 my-8 ml-8
          lg:text-[40px] sm:text-3xl text-2xl font-bold
        `}>
        Benefit from Decades <br/> of Life Cycle Know How
        </div>
        <div className={`
          flex flex-col bg-white lg:mb-10
          lg:translate-y-1/2 lg:-translate-x-1/3 shadow-xl
          `}>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 text-cc_grey_text text-lg px-8 mb-8'>
            <div className=''>
              Our decade-long permanent presence on cement plants helps
              us to design buildings today that will be ready for whatever
              tomorrow brings. With our comprehensive planning methodology and
              building life cycle experience we anticipate use
            </div>
            <div>
              changes, unexpected utilisation and lifetime expositions early
              on during planning. This allows us to design buildings that are
              flexible, long-lasting, and economically efficient.
            </div>
          </div>
          <div className={`
            grid sm:grid-cols-6 grid-cols-4 gap-y-4
            divide-x-2 divide-dashed divide-cc_ligth_grey
            `}>
            {slides.map((slide, index) =>
              <div
                key={`sec4-slide-${index}`}
                id={`sec4-slide-${index}`}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`
                s4_slide sm:h-64 pb-8 lg:pl-8
                cursor-pointer flex flex-col px-4 content-between group
                hover:shadow-lg sm:order-${index}
                hover:text-cc_dark_grey hover:col-span-2
                `}>
                <div className={`
                  flex flex-row my-8 font-bold
                  `}>
                  <span>{`0${index + 1}`}</span>
                  <span>
                    <Plus className='fill-cc_grey_text group-hover:fill-cc_dark_grey translate-y-full' />
                  </span>
                </div>
                <div className={`
                  text-lg lg:text-left text-center font-semibold
                  capitalize hyphens-auto overflow-hidden
                `}>
                  {slide.title}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col gap-x-px lg:mt-8'>
        <div className='flex flex-col lg:p-0 lg:pl-20'>
          <Btns forward={handleForward} back={handleBack} visible='sm' />

         <img className='lg:max-h-[600px] lg:max-w-[1000px]'
          src={`./assets/cc_section4_slide${curSlide}.jpg`} />
        </div>
        <div className='flex flex-col justify-start lg:pt-36 pt-8'>
          <Btns forward={handleForward} back={handleBack} visible='lg' />
          <div className='text-3xl font-bold ml-4 mt-6 mb-8 lg:w-1/2 capitalize'>
            {slides[curSlide].title}
          </div>
          <div className='text-base text-cc_grey_text ml-4 lg:w-1/2'>
            {slides[curSlide].text}
          </div>

        </div>
      </div>
    </div>
  )
};

export default Section4;
