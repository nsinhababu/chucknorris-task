import axios from 'axios';
import { useEffect, useState } from 'react';
import CheckBox from '../../Components/CheckBox/CheckBox';
import Random from '../../Components/Random/Random';
import TopBar from '../../Components/TopBar/TopBar';
import './styles.css';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState('');
  const [catJoke, setCatJoke] = useState('');

  const handleCheckbox = (e) => {
    setSelectedCat(e.target.value);
  };

  const handleGetJokes = () => {
    if (selectedCat) {
      axios
        .get(`https://api.chucknorris.io/jokes/random?category=${selectedCat}`)
        .then((res) => setCatJoke(res.data.value))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (!categories.length) {
      axios
        .get('https://api.chucknorris.io/jokes/categories')
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className='d-container'>
      <TopBar />

      <Random />

      <div className='cat-container'>
        <h2>By Category</h2>
        <div className='categories'>
          {categories.length &&
            categories.map((item, index) => {
              return (
                <CheckBox
                  key={Math.random() * 1000 * index}
                  onChange={(e) => {
                    handleCheckbox(e);
                  }}
                  name={item}
                  label={item}
                  type='checkbox'
                  value={item}
                />
              );
            })}
        </div>
        <button
          className='get-cat-joke-btn'
          onClick={(e) => {
            handleGetJokes(e);
          }}
          type='button'
        >
          Get Jokes
        </button>
        {catJoke && <p>{catJoke}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
