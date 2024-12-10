import { lowerCase } from 'lodash';

const DefaultRow = () => {
  return (
    <div className='flex flex-row gap-x-4'>
      You?
      <button className='rounded-full bg-cc_secondary2 hover:bg-cc_secondary text-white text-sm px-4'>
        Apply Now
      </button>
    </div>
)
}

const StaffCard = ({ name, position, variant }) => {
  const handleImgLoadingError = (e) => {
    e.target.src = '/assets/photo_staff/default.png';
 };

  const photo  = variant ? 'default.png' : `${lowerCase(name).split(' ').join('_')}.jpg`;

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex'>
        <img
          className='object-cover'
          src={`./assets/photo_staff/${photo}`}
          alt={`name`}
          onError={(e) => handleImgLoadingError(e)}
          />
      </div>
      <div className='text-xl font-bold'>
        {variant ? <DefaultRow /> : name}
      </div>
      <div className='flex flex-row items-center'>
        <img className='w-5 h-4 mr-2' src='./assets/cc_arrow2.png' />
        {variant ? 'Senior Engineer Concrete' : position}
      </div>
    </div>
  )
};

export default StaffCard;
