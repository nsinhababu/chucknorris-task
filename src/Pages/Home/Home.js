import { Outlet, useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('data')) || '';
  return <div>{data ? <Outlet /> : navigate('/login')}</div>;
};

export default Home;
