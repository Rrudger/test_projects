import { useEffect } from 'react';
import classNames from 'classnames';
import Star from '../icons/star-fill.svg';

const Slide = ({ id, act, prevSlide, content }) => {

  const slideClass = classNames(
    'absolute flex flex-col',
    'w-64 h-56',
    {
    'show_animation opacity-0': act === id,
    'fade_animation opacity-1': prevSlide === id,
    'opacity-0': prevSlide !== id && act !== id,
	});

  return (
    <div id={`review_${id}`} className={slideClass}>
      <div className='flex flex-row justify-between gap-x-2'>
        <div className='w-24 h-24'>
          <img src='./assets/bing_logo.png' />
        </div>
        <div className='flex flex-col text-left'>
          <div className='capitalize font-medium'>
            graphics resource purchased by <b>{content[0]}</b>
          </div>
          <div className='flex flex-row gap-x-1 my-1 fill-bc_secondary'>
            <Star className='fill-bc_secondary'/>
            <Star className='fill-bc_secondary'/>
            <Star className='fill-bc_secondary'/>
            <Star className='fill-bc_secondary'/>
            <Star className='fill-bc_secondary'/>
          </div>
        </div>
      </div>
      <div className='mt-4 text-sm'>
        {content[1]}
      </div>
    </div>
  )
};

export default Slide;
