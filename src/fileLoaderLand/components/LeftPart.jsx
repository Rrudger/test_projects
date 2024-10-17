import { useState } from 'react';
import FileInputIcon from '../assets/fileInput.svg';

const Slider = ({ value, setValue }) => {
  const min = 0;
  const max = 32;

  return (
    <div className='my-3 font_color_range'>
      <label
        htmlFor="fontSizeRange"
        className="mb-2 inline-block flex justify-between"
      >
        <div>Font Size</div>
        <div>{value}</div>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        className={`
          appearance-none
          h-[25px]
          w-full cursor-pointer
          rounded-full
          `}
          style={{
              background: `linear-gradient(to right, #BEF264 ${(value * 100) / max}%,
              #D9D9D9 ${(value * 100) / max}%)`
            }}
        id="fontSizeRange"
      />
    </div>
  )
};

const InputColor = ({ id, title, value, setValue }) => {
  return (
    <div className='my-3'>
      <div className='mb-2'>
        {title}
      </div>
      <div className='flex flex-row border border-black rounded-md'>
        <div className="flex flex-row items-center">
          <input
            type="color"
            id={id}
            name={id}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className='w-[50px] h-[50px] cursor-pointer rounded-lg border border-black/75 m-2'
          />
          <label className='ml-2' htmlFor={id}>{value}</label>
        </div>
      </div>
    </div>
  )
};

const FileInput = ({ id, title, value, setValue }) => {
  return (
    <div className='my-3'>
      <div className='mb-2'>
        {title}
      </div>
      <div className='flex flex-row border border-black rounded-md'>
        <div className="flex flex-row items-center">
          <input
            type="file"
            id={id}
            onChange={(e) => setValue(e.target.files[0].name)}
            hidden
            />
          <label
            htmlFor={id}
            className={`block flex flex-row items-center
            text-sm text-slate-500 my-2 ml-2 mr-4 py-2 px-4
            rounded-md border-0 text-sm font-semibold
            bg-primary text-white cursor-pointer`}
          >
          <FileInputIcon className='mr-2'/>
            Choose file
          </label>
          <label className="text-sm text-slate-500">{value}</label>
        </div>
      </div>
    </div>
  )
};

const LeftPart = () => {
  const [selectedVideo, setSelectedVideo] = useState("No file chosen");
  const [selectedMp3, setSelectedMp3] = useState("No file chosen");
  const [selectedText, setSelectedText] = useState("No file chosen");
  const [selectedFont, setSelectedFont] = useState("No file chosen");
  const [fontColor, setFontColor] = useState('#FFFFFF');
  const [subsColor, setSubsColor] = useState('#000000B2');
  const [fontSize, setFontSize] = useState(16);

  const handleSubmit = () => {
    console.log('click');
  };

  return (
    <div className={`w-full
      flex flex-col justify-center
      rounded-2xl
      bg-white shadow-xl
      mx-4 pb-10 p-4
      `}>
      <h2 className='text-3xl font-semibold text-center'>
        Upload And Customise
      </h2>
      <FileInput
        id='video_input'
        title='Upload Your Video:'
        value={selectedVideo}
        setValue={setSelectedVideo}
      />
      <FileInput
        id='mp3_input'
        title='Video’s MP3 File:'
        value={selectedMp3}
        setValue={setSelectedMp3}
      />
      <FileInput
        id='transcription_input'
        title='Video’s transcribed Text File:'
        value={selectedText}
        setValue={setSelectedText}
      />

      <h3 className='text-3xl font-medium text-left my-6'>
        Subtitle Design
      </h3>
      <FileInput
        id='font_input'
        title='Upload Font File:'
        value={selectedFont}
        setValue={setSelectedFont}
      />
      <Slider
        value={fontSize}
        setValue={setFontSize}
      />
      <InputColor
        id='font_color'
        title='Font Color:'
        value={fontColor}
        setValue={setFontColor}
      />
      <InputColor
        id='subs_color'
        title='Subtitles Background Color:'
        value={subsColor}
        setValue={setSubsColor}
      />

      <button
        onClick={handleSubmit}
        className='rounded-full border border-black p-3 mt-10 font-medium'>
        Process
      </button>
    </div>
  )
};

export default LeftPart;
