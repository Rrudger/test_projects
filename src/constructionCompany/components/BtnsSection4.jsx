import classNames from 'classnames';

const Btns = ({ forward, back, visible }) => {
  const classes = classNames('flex flex-row lg:justify-start justify-center text-white font-bold text-lg lg:my-0 my-4 ',
  {
    'lg:hidden': visible === 'sm',
    'lg:flex hidden': visible === 'lg',
   }
);

  return (
    <div className={classes}>
      <button
        onClick={back}
        className={`
        grid place-content-center h-16 w-16 rotate-180
        bg-cc_primary hover:bg-cc_primary_hover
        `}>
        <img src='./assets/cc_arrow.png' />
      </button>
      <button
        onClick={forward}
        className={`
        grid place-content-center h-16 w-16
        bg-cc_secondary hover:bg-cc_secondary_hover
        `}>
        <img src='./assets/cc_arrow.png' />
      </button>
    </div>
  )
};

export default Btns;
