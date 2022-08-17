import { Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />}>
          <Route index element={<Dashboard />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
