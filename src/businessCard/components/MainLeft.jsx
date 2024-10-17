import { useEffect, useState } from 'react';
import '../style.css';
import Slide from './SlideLogo.jsx';
import Arrow from '../icons/arrow-right-short.svg';

const MainLeft = () => {
  const slidesNum = 3;
  const [act, setAct] = useState(0);
  const [direction, setDirection] = useState(1);
  const prev = () => {
    setDirection(0);
    setAct(act === 0 ? slidesNum - 1 : act - 1);
  };
  const next = () => {
    setDirection(1);
    setAct(act === slidesNum - 1 ? 0 : act + 1);
  };
  setInterval(next, 10000);

  const btnMove = () => {
    const btn = document.getElementById('book_btn');
    const wrap = document.getElementById('btn_wrap');
    setTimeout(() => {
      wrap.classList.add('bg-bc_secondary');
    }, 300);
    setTimeout(() => {
      wrap.classList.remove('bg-bc_secondary');
    }, 1200);
    btn.removeEventListener("mouseover", btnMove );
    if (btn.classList.contains('btn_rotate')) {
      btn.classList.add('btn_move_rev');
      btn.classList.remove('btn_rotate');
    } else {
      btn.classList.add('btn_move');
      btn.classList.add('btn_rotate');
    }
    setTimeout(() => {
      btn.classList.remove('btn_move');
      btn.classList.remove('btn_move_rev');
      btn.addEventListener("mouseover", btnMove );
    }, 1500);
  };

  useEffect(() => {
    const btn = document.getElementById('book_btn');
    btn.addEventListener("mouseover", btnMove );
  }, []);

  return (
    <div className={`
      flex justify-end
      w-full px-10 pt-[100px]
      bg-bc_tertiary
      text-left
      `}>
      <div className='flex flex-col sm:gap-y-8 sm:w-3/4 w-full sm:px-0 px-1'>
        <div className='sm:text-3xl text-xl mt-6'>
          Hi! 👋 I am <b>Clara</b>
        </div>
        <div className='sm:text-6xl text-3xl font-semibold leading-normal my-2'>
          AI Automation & Integration <br/> Specialist
        </div>
        <div className='static'>
          <div className='sm:text-2xl text-lg leading-normal'>
            If you can imagine it I can automate it! I make your operations more efficient so you can focus on what matters most.
          </div>
          <div className={`
            absolute
            sm:inset-y-[300px] inset-y-[200px] sm:inset-x-[180px] inset-x-[250px]
            sm:rotate-45 -rotate-90
            w-24 h-24
            `}>
            <img src='./assets/bc_arrow.png' />
          </div>
        </div>
        <div className='flex flex-row my-8'>
          <div
            id='btn_div'
            className={`
              flex items-center
              text-2xl font-semibold uppercase
              bg-bc_secondary px-4 pl-8 pr-28
              `}>
              Book a free consultation
          </div>
          <div id='btn_wrap' className='w-10'>
            <button
              id='book_btn'
              className={`
                book_btn
                flex justify-center items-center p-2
                rounded-full bg-bc_primary
                outline outline-offset-0 outline-8 outline-white
                `}>
              <Arrow className='fill-bc_secondary stroke-2'/>
            </button>
          </div>
        </div>
        <hr className='bg-bc_primary border-bc_primary'/>
        <div className='flex flex-row my-12 justify-between items-center'>
          <div className='w-1/2 font-semibold'>
            We provide services to many <br/> worldwide leading companies
          </div>
          <div className='flex flex-row mr-4'>
            <button onClick={prev} className='rounded-full bg-grey opacity-50 mx-4'>
              <Arrow className='w-8 h-8 rotate-180' />
            </button>
            <button onClick={next} className='rounded-full bg-grey opacity-50'>
              <Arrow className='w-8 h-8'/>
            </button>
          </div>
        </div>
        <div>
          <Slide
          id={0}
          act={act}
          direction={direction}
          content={['bc_logo1.png', 'bc_logo2.png', 'bc_logo3.png']} />
          <Slide
          id={1}
          act={act}
          direction={direction}
          content={['bc_logo1.png', 'bc_logo2.png', 'bc_logo3.png']} />
          <Slide
          id={2}
          act={act}
          direction={direction}
          content={['bc_logo1.png', 'bc_logo2.png', 'bc_logo3.png']} />
        </div>
      </div>
    </div>
  )
};

export default MainLeft;
