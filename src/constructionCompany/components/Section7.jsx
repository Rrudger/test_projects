import StaffCard from './StaffCard.jsx';
import ManagmentCard from './ManagmentCard.jsx';
import Title from './Section7Title.jsx';

const Section7 = () => {
  return (
    <div className='flex flex-col m-20'>
      <div className='w-1/4 mb-12'>
        <div className='font-bold text-4xl my-8'>
          Meet the Team
        </div>
        <div className='text-cc_secondary text-3xl'>
          These are the experts that turn ideas into reality
        </div>
      </div>

      <div className='flex flex-col divide-y-2 divide-dashed divide-cc_ligth_grey'>
        <div className='flex flex-row items-end my-12'>
          <div className='relative w-[170px] h-32 -rotate-90 origin-center'>
            <Title title='Leadership Team' />
          </div>

          <ManagmentCard
            name='Sophia Carter'
            position='CEO'
            text='Sophia plays a key role in strategizing and executing projects, driving growth and innovation essential for the company’s success.'
            variant='0'
          />
          <ManagmentCard
            name='Klaus-Dieter Mollenhauer'
            position='Creative Director'
            text="Klaus drives innovation, enhances collaboration, and ensures project success, making them vital to the company's growth."
            variant='1'
          />
        </div>

        <div className='flex flex-row items-end py-12'>
          <div className='relative w-96 h-32 -rotate-90 origin-center'>
            <Title title='Engineers' />
          </div>

          <div className='grid grid-cols-6 gap-x-2'>
            <StaffCard
              name='Bernhard Meyer'
              position='Senior Steel Structures Engineer'
            />
            <StaffCard
              name='Alexandra Jung'
              position='Project Engineer'
            />
            <StaffCard
              name='Stefan Schniedermeier'
              position='Project Engineer'
            />
            <StaffCard
              name='Vera Meyer'
              position='Project Engineer'
            />
            <StaffCard
              variant='default'
            />
          </div>
        </div>

        <div className='flex flex-row items-end py-12'>
          <div className='relative w-96 h-32 -rotate-90 origin-center'>
            <Title title='Technical staff' />
          </div>

          <div className='grid grid-cols-6 gap-x-2'>
            <StaffCard
              name='Domenik Schmidt'
              position='Head of Layout & Design'
            />
            <StaffCard
              name='Manuela Sonntag'
              position='Reinforcement Technician'
            />
            <StaffCard
              name='Mark Peters'
              position='Planning Permission Design'
            />
            <StaffCard
              name='Katarina Maslanova'
              position='Structural Drawings'
            />
            <StaffCard
              name='Benedikt Schroder-Schluter'
              position='Structural Drawings'
            />
            <StaffCard
              name='Michael Dick'
              position='Structural Drawings'
            />
          </div>
        </div>

        <div className='flex flex-row items-end py-12'>
          <div className='relative w-96 h-32 -rotate-90 origin-center'>
            <Title title='Engineering Trainees' />
          </div>

          <div className='grid grid-cols-6 items-end gap-x-2'>
            <StaffCard
              name='Celia Thorne'
              position='Project Engineer'
            />
            <StaffCard
              name='Leonie Kahr'
              position='Project Engineer'
            />
            <div className='translate-x-[180px] relative w-12 h-12 -rotate-90 origin-center'>
              <Title title='Other Team Members' variant='2' />
            </div>
            <StaffCard
              name='Michelle Michalik'
              position='Assistent to the Management'
            />
          </div>

        </div>

      </div>
    </div>
  )
};

export default Section7;
