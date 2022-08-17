import { useState } from 'react';
import Input from '../../Components/Input/Input';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const [loginData, setLoginData] = useState({ mail: '', password: '' });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
    console.log(loginData);
  };

  const handleSubmit = () => {
    const data = JSON.parse(localStorage.getItem('data')) || '';
    if (!data) {
      localStorage.setItem('data', JSON.stringify(loginData));
      navigate('/');
    }
  };

  return (
    <div className='login-container'>
      <form
        className='login-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Input
          onChange={(e) => {
            handleChange(e);
          }}
          label='Email:'
          name='mail'
          type='email'
          required
        />
        <Input
          onChange={(e) => {
            handleChange(e);
          }}
          label='password:'
          name='password'
          type='password'
          required
        />
        <button className='login-btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
