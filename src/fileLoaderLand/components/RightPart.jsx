const RightPart = ({ fontColor, bgSubs, fontSize }) => {

  const fontStyle = {
    color: fontColor,
    'backgroundColor': bgSubs,
    'fontSize': Number(fontSize),
  };

  return (
    <div className='w-full sm:mt-0 mt-8 sm:pl-10 flex flex-col'>
      <h2 className='sm:order-1 order-3 text-[40px] font-semibold text-center mb-4'>
        Tutorial
      </h2>
      <div className='sm:order-2 order-4 sm:h-1/2 h-52 rounded-2xl bg-grey'>
      </div>
      <h2 className='sm:order-3 order-1 text-[40px] font-semibold text-center sm:mt-12 my-4'>
        Preview
      </h2>
      <div className='sm:order-4 order-2 sm:h-1/2 h-80 rounded-2xl bg-grey flex flex-col sm:justify-end justify-between overflow-hidden'>
        <div className='sm:mt-0 mt-8 sm:text-5xl text-2xl text-black/75 text-center font-semibold sm:mb-24 mb-0'>
          Your New Scene Will Go Here
        </div>
        <div
          className='font-bold text-center m-10'
          style={fontStyle}
        >
          This Is How Your Original Subtitle Text Will Be Displayed
        </div>
      </div>
    </div>
  )
};

export default RightPart;
