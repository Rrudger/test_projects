import Instagram from '../icons/instagram.svg';
import Facebook from '../icons/facebook.svg';

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: "url('./assets/cc_bg_footer.png')"}}
      className='w-screen flex flex-col justify-start bg-cover bg-center relative z-10'
    >
      <div className={`
        py-12 pl-12 mt-12 ml-2
        w-fit flex flex-row gap-x-12
        bg-white border-r border-cc_secondary2/50
        `}>
        <img className='w-20 h-14' src='./assets/cc_footer_logo.png' />
        <div className='flex flex-col gap-y-4'>
          <div className='font-bold text-cc_black pr-12'>
            Contacts::
          </div>
          <div className='pr-12'>
            Erwitter Str. 40<br/>59590 Geseke<br/>GERMANY
          </div>
          <div className='pr-12'>
            +49 29 42 / 97 83 71
          </div>
          <div className='text-cc_secondary2 pr-12'>
            info@m-bp.de
          </div>
          <hr className='border-cc_secondary2/50' />
          <div className='flex flex-row items-center gap-x-4'>
            <div className='font-bold text-cc_black'>
              Our Social Media:
            </div>
            <Instagram className='size-[38px] fill-cc_secondary2 stroke-2 cursor-pointer' />
            <Facebook  className='size-[35px] fill-cc_secondary2 stroke-2 cursor-pointer mr-4' />
          </div>
        </div>
      </div>

      <div className={`
        mt-20 p-8
        grid grid-cols-3 gap-x-12
        opacity-90 bg-cc_primary
        border-t-2 border-cc_secondary2
        `}>
        <div className='flex flex-row justify-center divide-x text-white'>
          <p className='mr-4'>Imprint</p>
          <p className='pl-4'>Data Privacy</p>
        </div>

        <div className='flex flex-row justify-center divide-x text-white'>
          <p className='mr-4'>Copyright : mbp</p>
          <p className='pl-4'>Mollenhauer Beraten & Planen GmbH</p>
        </div>

        <div className='flex justify-center text-white'>
          Consulting & Structural Engineering Design
        </div>


      </div>

    </div>
  )
};

export default Footer;
