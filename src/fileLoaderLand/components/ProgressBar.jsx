const ProgressBar = () => {
  return (
    <div className='mt-24 mx-2 grid grid-cols-1 justify-items-center'>
      <div className="w-1/2 flex flex-row justify-center items-center">
        <div className='relative'>
          <div className="w-6 h-6 bg-green rounded-full">
          </div>
          <div className='absolute -top-8 -inset-x-1/2 text-nowrap flex justify-center overflow-visible'>
            Upload
          </div>
        </div>
        <div className="w-1/4 -mx-1 h-2.5 bg-light">
        </div>
        <div className='relative'>
          <div className="w-6 h-6 bg-light rounded-full">
          </div>
          <div className='absolute -top-8 -inset-x-1/2 text-nowrap flex justify-center overflow-visible'>
            Scene Change
          </div>
        </div>
        <div className="w-1/4 -mx-1 h-2.5 bg-light">
        </div>
        <div className='relative'>
          <div className="w-6 h-6 bg-light rounded-full">
          </div>
          <div className='absolute -top-8 -inset-x-1/2 text-nowrap flex justify-center overflow-visible'>
            Voice Over Change
          </div>
        </div>
        <div className="w-1/4 -mx-1 h-2.5 bg-light">
        </div>
        <div className='relative'>
          <div className="w-6 h-6 bg-grey rounded-full">
          </div>
          <div className='absolute -top-8 -inset-x-1/2 text-nowrap flex justify-center overflow-visible'>
            Background Music Change
          </div>
        </div>
        <div className="w-1/4 -mx-1 h-2.5 bg-light">
        </div>
        <div className='relative'>
          <div className="w-6 h-6 bg-grey rounded-full">
          </div>
          <div className='absolute -top-8 -inset-x-1/2 text-nowrap flex justify-center overflow-visible'>
            Download
          </div>
        </div>
      </div>


    </div>
  )
};

export default ProgressBar;
