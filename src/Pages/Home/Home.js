import { Outlet, Navigate } from 'react-router-dom';
const Home = () => {
  const data = JSON.parse(localStorage.getItem('data')) || '';

  return <div>{data ? <Outlet /> : <Navigate to='/login' />}</div>;
};

export default Home;
