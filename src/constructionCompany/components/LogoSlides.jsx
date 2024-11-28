const LogoSlides = ({ setReview, firstSlide }) => {
  return (
    <div className='sm:my-12 my-8 grow grid grid-cols-4 divide-x-2 divide-dashed divide-cc_ligth_grey'>
      {new Array(4).fill(0).map((logo, index) =>
        <div
          onClick={setReview}
          key={`logo${index + firstSlide}`}
          id={`logo${index + firstSlide}`}
          className='logo cursor-pointer w-full flex justify-center'>
          <div className='sm:w-36 w-20 h-16 py-12 grid place-content-center'>
            <img src={`./assets/cc_section5_logo${firstSlide + index}.png`} />
          </div>
        </div>
      )}
    </div>
  )
};

export default LogoSlides;
