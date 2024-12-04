import './style.css';
import Header from './components/Header.jsx';
import ImageBgSection from './components/ImageBgSection.jsx';
import Section2 from './components/Section2.jsx';
import Section3 from './components/Section3.jsx';
import Section4 from './components/Section4.jsx';
import Section5 from './components/Section5.jsx';
import Section6 from './components/Section6.jsx';
import Section7 from './components/Section7.jsx';
import Footer from './components/Footer.jsx';

const ConstructionCompany = () => {
  return (
    <div className='font-source'>
      <div className='relative overflow-hidden'>
        <Header />

        <div id='image_bg_sec' className='relative h-screen'>
          <ImageBgSection />
          <div className='absolute h-full w-full bg_gradient opacity-85 z-30'>
          </div>
          <div
            style={{ backgroundImage: "url('./assets/bg_cc.jpeg')"}}
            className='h-full bg-cover bg-center relative z-10'
          >

          </div>
        </div>
        <div id='blue_sec' className='h-screen bg-cc_primary'>
          <Section2 />
        </div>
        <div className='lg:h-screen sm:h-[600px] bg-white'>
          <Section3 />
        </div>
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </div>
    </div>
  )
};

export default ConstructionCompany;
