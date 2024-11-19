import { useState } from 'react';
import Slide from './Slide.jsx';

const Slides = () => {
  const slides = [
    'Civil engineering',
    'Machine and building foundations',
    'Silo and slipform construction',
    'Assesments, building inspection, concrete maintenance and repair',
    'International cement factory construction',
    'Construction in ongoing operations'
  ];

  const w = window.screen.width;
  const slidesNum = w > 1100 ? 6 : w > 600 ? 3 : 1;
  const [firstSlide, setFirst] = useState(0);

  const handleBack = () => {
    firstSlide === 0 ? setFirst(slides.length - slidesNum) : setFirst(firstSlide - slidesNum);
  };
  const handleFor = () => {
    firstSlide === slides.length - slidesNum ? setFirst(0) : setFirst(firstSlide + slidesNum);
  };

  return (
    <div className={`
      absolute h-full w-full z-50
      grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-1
      border-y border-cc_ligth_grey divide-x divide-y divide-cc_ligth_grey
    `}>
      <div
        onClick={handleBack}
        className='lg:hidden absolute inset-y-1/2 ml-4 rotate-90 cursor-pointer'>
        <img src='./assets/cc_rectangle.svg' />
      </div>
      {slides.slice(firstSlide, firstSlide + slidesNum).map((slide, index) => {
        return <Slide key={firstSlide + index} text={slide} num={firstSlide + index} />
      })}
      <div
        onClick={handleFor}
        className='lg:hidden absolute right-0 inset-y-1/2 mr-4 -rotate-90 cursor-pointer'>
        <img src='./assets/cc_rectangle.svg' />
      </div>

    </div>
  )
};

export default Slides;
