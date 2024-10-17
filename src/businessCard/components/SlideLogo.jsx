import classNames from 'classnames';

const Slide = ({ id, act, direction, content }) => {

  const slideClass = classNames('flex flex-row',
     'justify-between content-center gap-x-2',
     'transition-transform ease-out duration-500',
     'slide'
     , {
  		hidden: act !== id,
      'move_right': direction === 1,
      'move_left': direction === 0,
  	});

    return (
      <div className={slideClass}>
        {content.map((logo, index) => <div className='w-1/3 h-24 flex text-bc_primary' key={index}>
            {`LOGO ${id} ${index}`}
          </div>)}
      </div>
    )
};

export default Slide;
