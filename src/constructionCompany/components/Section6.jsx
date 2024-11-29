import Arrow from '../icons/cc_arrow_long.svg';
import text from '../texts/section6.js';

const Section6 = () => {
  return (
    <div className='lg:grid grid-cols-4 flex flex-col sm:mx-20 mx-4'>
      <div className='flex flex-col gap-y-8 mr-20'>
        <div className='text-cc_dark_grey text-lg'>
          Holistic. Agile. Reliable
        </div>
        <div className='text-cc_secondary text-3xl'>
          With this triad we line up to support you to realize your projects successfully.
        </div>
        <Arrow />
      </div>

      <div className='flex flex-col col-span-3'>
        <div className='lg:grid grid-cols-3 gap-x-12 flex flex-col gap-y-8 my-16 font-semibold text-cc_black'>
          <div>
            {text.col_1}
          </div>
          <div>
            {text.col_2}
          </div>
        </div>

        <div className='lg:grid grid-cols-3 gap-x-12 flex flex-col gap-y-12'>
          <div>
            <div className='font-black font-cc_black text-3xl mb-8'>
              {text.part_1_title}
            </div>
            <div className='text-cc_grey_text'>
              {text.part_1}
            </div>
          </div>

          <div>
            <div className='font-black font-cc_black text-3xl mb-8'>
              {text.part_2_title}
            </div>
            <div className='text-cc_grey_text'>
              {text.part_2}
            </div>
          </div>

          <div>
            <div className='font-black font-cc_black text-3xl mb-8'>
              {text.part_3_title}
            </div>
            <div className='text-cc_grey_text'>
              {text.part_3}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Section6;
