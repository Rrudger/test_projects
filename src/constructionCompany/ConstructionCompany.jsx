import './style.css';
import Header from './components/Header.jsx';
import ImageBgSection from './components/ImageBgSection.jsx';

const ConstructionCompany = () => {
  return (
    <div className='font-source'>
      <div className='relative overflow-hidden'>
        <Header />
        
        <div id='image_bg_sec' className='relative h-screen'>
          <ImageBgSection />
          <div className='absolute h-full w-full bg_gradient opacity-85 z-40'>
          </div>
          <div
            style={{ backgroundImage: "url('./assets/bg_cc.jpeg')"}}
            className='h-full bg-cover bg-center relative z-10'
          >

          </div>
        </div>
        <div id='blue_sec' className='h-screen bg-cc_primary'>
          main 2
        </div>
      </div>
    </div>
  )
};

export default ConstructionCompany;
