const MainPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-1/2 bg-grey text-lg text-primary capitalize shadow-lg rounded-lg m-24 divide-y-4'>
        <div className='p-4'>
          <a href="/fileLoader">file loader</a>
        </div>
        <div className='p-4'>
          <a href='/businessCard'>business card</a>
        </div>
      </div>
    </div>
  )
};

export default MainPage;
