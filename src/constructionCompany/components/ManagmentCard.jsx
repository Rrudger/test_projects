import Arrow from '../icons/cc_arrow_long.svg';
import LiIcon from '../icons/linkedin.svg';
import classNames from 'classnames';
import {  lowerCase } from 'lodash';

const ManagmentCard = ({ name, position, text, variant }) => {
  const shadowClasses = classNames('absolute h-1/2 w-full inset-y-1/2',
  {
    'bg-cc_secondary -skew-y-[30deg] rotate-6 origin-bottom-right': variant === '0',
    'bg-cc_primary -skew-y-[6deg] left-[20px] -rotate-6 origin-bottom': variant === '1',
   }
 );
  const rowClasses = classNames('mr-12 flex flex-row',
 {
   'overflow-hidden': variant === '0',
  }
);
  const colClasses = classNames('w-1/2 flex flex-col gap-y-8 pl-12',
  {
     'z-50 bg-white': variant === '1',
  }
);
const handleImgLoadingError = (e) => {
  e.target.src = '/assets/photo_staff/default.png';
};
const photo  = lowerCase(name).split(' ').join('_');

  return (
    <div className={rowClasses}>
      <div className='relative flex w-[300px] h-[350px]'>
        <img
          className='object-cover z-50'
          src={`./assets/photo_staff/${photo}.jpg`}
          alt={`name`}
          onError={(e) => handleImgLoadingError(e)}
          />
        <div className={shadowClasses}>
        </div>
      </div>
      <div className={colClasses}>
        <div className='text-4xl font-bold'>
          {name}
        </div>
        <div className='flex flex-row items-center'>
          <img className='w-5 h-4 mr-2' src='./assets/cc_arrow2.png' />
          <div>
            {position}
          </div>
        </div>
        <div className='text-cc_grey_text'>
          {text}
        </div>
        <div>
          <LiIcon className='cursor-pointer'/>
        </div>
      </div>
    </div>
  )
};

export default ManagmentCard;
