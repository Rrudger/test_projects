import { useEffect, useState } from 'react';
import Slide from './SlideReview.jsx';
import Arrow from '../icons/arrow-right-short.svg';

const MainRight = () => {
  const slidesNum = 3;
  const [act, setAct] = useState(0);
  const [prevSlide, setPrev] = useState(slidesNum - 1);
  const prev = () => {
    const p = act;
    setPrev(p);
    setAct(act === 0 ? slidesNum - 1 : act - 1);
  };
  const next = () => {
    setPrev(act);
    setAct(act === slidesNum - 1 ? 0 : act + 1);
  };


  return (
    <div className={`
      flex sm:flex-row flex-col justify-start
      w-full sm:pt-[150px]
      sm:-translate-x-10
      `}>
      <div className='flex flex-col'>
        <div className='flex justify-end'>
          <img
            className='w-12 h-12 mr-8 sm:translate-y-6 translate-y-8 sm:translate-x-0 -translate-x-12'
            src='./assets/bc_diagram.png' />
        </div>
        <div className='w-80 h-96 flex flex-col justify-center slide_review bg-bc_tertiary rounded-lg p-8'>
        <div className='w-64 h-56 relative'>
          <Slide
            id={0}
            act={act}
            prevSlide={prevSlide}
            content={[
              'Clara Wintheiser',
              "Exceptional service! The team's creativity and attention to detail transformed our vision into stunning visuals. Highly recommend!"
            ]} />
          <Slide
            id={1}
            act={act}
            prevSlide={prevSlide}
            content={[
              'Luca Veraldi',
              "Absolutely thrilled with services! The quality and creativity exceeded my expectations, making my project shine."
            ]} />
          <Slide
            id={2}
            act={act}
            prevSlide={prevSlide}
            content={[
              'Elena Vossberg',
              "The graphic resource services were exceptional! Quick turnaround, high-quality designs, and outstanding customer support. Highly recommend!"
            ]} />

        </div>
        <div className='flex flex-row items-center justify-between'>
          <hr className='bg-bc_primary border-bc_primary opacity-50 w-1/2'/>
          <div className='flex flex-row'>
            <button onClick={prev} className='rounded-full bg-bc_secondary mx-4'>
              <Arrow className='w-8 h-8 rotate-180' />
            </button>
            <button onClick={next} className='rounded-full bg-bc_secondary'>
              <Arrow className='w-8 h-8'/>
            </button>
          </div>
        </div>
        </div>
        <div className='flex justify-end'>
          <div className={`
            flex flex-row w-5/6
            bg-bc_primary rounded-l-full text-white
            -translate-y-6
            `}>
            <div className={`
              flex justify-center
              p-2 ml-2 my-2 mr-1 w-11 h-11
              rounded-full bg-bc_secondary
              text-bc_primary text-xl
              `}>
              4.9
            </div>
            <div className='flex flex-col justify-center'>
              <div className='capitalize font-semibold'>
                overall clients ratings
              </div>
              <div className='text-xs'>
                More than 100 satisfied customers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={`
            sm:w-full w-10/12
            flex flex-row justify-between items-center
            bg-bc_secondary text-bc_primary
            rounded-r-full p-2 mt-[150px]
          `}>
            <div className='text-xl font-semibold uppercase ml-4 mr-8'>
              case studies
            </div>
            <div className={`
              cursor-pointer
              transition ease-in-out delay-150 hover:scale-125 hover:text-bc_secondary duration-300
              grid place-content-center rounded-full bg-bc_primary text-white
              `}>
              <Arrow className='-rotate-45 w-11 h-11' />
            </div>
          </div>
        </div>
        <div className='bg-bc_tertiary h-96 mt-[100px] flex items-end'>
          <img className='w-80 h-[480px]' src='./assets/bc_photo.png' />
        </div>
      </div>
    </div>
  )
};

export default MainRight;
