import { useEffect, useState } from 'react';
import Plus from '../icons/cc_plus.svg';

const Slide = ({ text, num, img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const slideStyle = {
    backgroundImage: isHovered ? `url("./assets/cc_${num + 1}_slide.jpg")` : '',
    backgroundSize: 'cover',
  };

  return (
    <div
      id={`slide-${num}`}
      style={slideStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
      h-full cursor-pointer
      flex flex-col px-8 content-between group hover:shadow-lg
      hover:animate-fadeIn
      `}>
      <div className={`
        flex flex-row mt-8
        text-cc_secondary group-hover:text-white
        `}>
        <span>{`0${num + 1}`}</span>
        <span>
          <Plus className='fill-cc_secondary group-hover:fill-white translate-y-full' />
        </span>
      </div>
      <div className={`
        group-hover:text-white mt-40  leading-tight
        text-lg text-cc_dark_grey lg:text-left text-center font-extrabold
      `}>
        {text}
      </div>
    </div>
  )
};

export default Slide;
