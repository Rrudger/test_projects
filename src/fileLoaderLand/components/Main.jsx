import { useState } from 'react';
import LeftPart from './LeftPart.jsx';
import RightPart from './RightPart.jsx';

const Main = () => {
  const [fontColor, setFontColor] = useState('#FFFFFF');
  const [bgSubs, setbgSubs] = useState('#000000B2');
  const [fontSize, setFontSize] = useState(32);

  return (
    <div className='mt-24 grid grid-cols-1 justify-items-center'>
      <div className='w-3/4 grid sm:grid-cols-2 grid-cols-1 gap-x-12 justify-items-center divide-grey sm:divide-x'>
        <LeftPart
          fontColor={fontColor}
          setFontColor={setFontColor}
          bgSubs={bgSubs}
          setbgSubs={setbgSubs}
          fontSize={fontSize}
          setFontSize={setFontSize}
          />
        <RightPart
          fontColor={fontColor}
          bgSubs={bgSubs}
          fontSize={fontSize}
        />
      </div>
    </div>
  )
};

export default Main;
