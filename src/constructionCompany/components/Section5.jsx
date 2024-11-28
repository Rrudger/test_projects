import { useState } from 'react';
import LogoSlides from './LogoSlides.jsx';
import Arrow from '../icons/cc_arrow.svg';
import Circle from '../icons/cc_circle.svg';
import Btns from './BtnsSection4.jsx';
import reviews from '../texts/section5.js';

const Section5 = () => {

  const [review, setCurReview] = useState(0);
  const setReview = (num) => {
    const newReview = document.getElementsByClassName('review')[0];
    newReview.classList.add('move_right');
    setTimeout(() => newReview.classList.remove('move_right'),1000);
    setCurReview(num);
  }
  const handleSetReview = (e) => {
    setReview(Number(e.target.closest('.logo').id.slice(-1)))
  };

  const [firstSlide, setFirst] = useState(0);
  const handleBack = () => {
    if (firstSlide === 0) {
      setFirst(4);
      setReview(7)
    } else {
      setFirst(0);
      setReview(3);
    }
  };
  const handleForward = () => {
    if (firstSlide === 4) {
      setFirst(0);
      setReview(0)
    } else {
      setFirst(4);
      setReview(4)
    }
  };

  const handleBackReview = () => {
    review === firstSlide ? handleBack() : setReview(review - 1);
  };
  const handleForwardReview = () => {
    review === firstSlide + 3 ? handleForward(): setReview(review + 1);
  };

  return (
    <div className='lg:my-32 lg:px-20 sm:px-8 mt-32 flex flex-col leading-tight'>
      <div className='font-bold text-4xl lg:w-1/4 lg:mx-0 mx-8 lg:text-left text-center'>
        Key Players in the cement industry trust us.
      </div>
      <div className='flex flex-row justify-between items-center'>
        <Arrow
          onClick={handleBack}
          className='rotate-180 fill-cc_dark_grey hover:fill-cc_grey cursor-pointer stroke-2 h-6 w-4' />
        <LogoSlides firstSlide={firstSlide} setReview={handleSetReview} />
        <Arrow
          onClick={handleForward}
          className='fill-cc_dark_grey hover:fill-cc_grey cursor-pointer stroke-2 h-6 w-4' />
      </div>

      <div className='flex lg:flex-row flex-col sm:my-20'>
        <div className='sm:text-left text-center flex flex-col lg:w-1/4 lg:ml-0 sm:ml-12 ml-0 lg:mb-0 mb-12'>
          <div className='text-4xl font-bold my-8'>
            What clients say.
          </div>
          <div className='text-cc_grey_text sm:text-lg'>
            Real stories from satisfied clients sharing their success experiences with us!
          </div>

        </div>

        <div className='flex flex-row items-end lg:flex sm:hidden sm:ml-0 ml-4 sm:mb-0 mb-4'>
          {new Array(4).fill(0).map((circle, index) => {
            const slideNum = 0 <= review && review < 4 ? review : review - 4;
            return  (
            <Circle
              key={index}
              className={slideNum === index ? 'w-4 h-4 fill-cc_secondary' : 'w-4 h-4 fill-cc_grey'} />
          )
          })}
        </div>

        <div className={`
          border-[40px] border-cc_secondary2
          lg:w-1/3 py-20 sm:mx-12 mx-4
          grid grid-cols-1 text-cc_dark_grey
          relative lg:size-[600px]
          `}>

          <div className='absolute mt-20 w-full sm:scale-x-125 scale-x-150 h-3/4 bg-white'>
          </div>
          <div className='review sm:pl-16 pl-4 relative z-50 sm:w-[600px]'>
          <div className='mb-12'>
            <img className='w-52 h-16 object-scale-down' src={`./assets/cc_section5_logo${review}.png`} />
          </div>
          <div className='text-xl font-medium italic'>
           {`"${reviews[review].text}"`}
          </div>
          <div className='font-bold mt-20 mb-4'>
            {reviews[review].author}
          </div>
          <div className='text-cc_secondary2 font-semibold'>
            {reviews[review].position}
          </div>
          </div>

        </div>

        <div className='flex lg:items-end justify-center'>
          <Btns forward={handleForwardReview} back={handleBackReview} />
        </div>
      </div>
    </div>
  );
};

export default Section5;
