import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-1/2 bg-grey text-lg text-primary capitalize shadow-lg rounded-lg m-24 divide-y-4'>
        <div className='p-4'>
          <Link to="/fileLoader">file loader</Link>
        </div>
        <div className='p-4'>
          <Link to="/businessCard">business card</Link>
        </div>
        <div className='p-4'>
          <Link to="/constructionCompany">construction company</Link>
        </div>
      </div>
    </div>
  )
};

export default MainPage;
