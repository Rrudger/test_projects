import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className='m-10'>
      Page not found. But you can go to the
      <Link className='font-semibold' to="/"> main page</Link>
    </div>
  )
};

export default Page404;
