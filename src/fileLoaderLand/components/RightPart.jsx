const RightPart = () => {
  return (
    <div className='w-full pl-10 flex flex-col'>
      <h2 className='text-[40px] font-semibold text-center mb-4'>
        Tutorial
      </h2>
      <div className='h-1/3 rounded-2xl bg-grey'>
      </div>
      <h2 className='text-[40px] font-semibold text-center my-4'>
        Preview
      </h2>
      <div className='h-1/2 rounded-2xl bg-grey flex flex-col justify-end'>
        <div className='text-5xl text-black/75 text-center font-semibold mb-24'>
          Your New Scene Will Go Here
        </div>
        <div className='text-[32px] text-white font-bold text-center bg-black/75 m-10'>
          This Is How Your Original Subtitle Text Will Be Displayed
        </div>
      </div>
    </div>
  )
};

export default RightPart;
