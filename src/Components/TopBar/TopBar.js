import axios from 'axios';
import { useState } from 'react';
import './styles.css';
const TopBar = () => {
  const [searchedKey, setSearchedKey] = useState('');
  const [searchedJoke, setSearchedJoke] = useState('');
  const handleSearch = (e) => setSearchedKey(e.target.value);
  const handleSearchBtn = () => {
    if (searchedKey) {
      axios
        .get(`https://api.chucknorris.io/jokes/search?query=${searchedKey}`)
        .then((res) => setSearchedJoke(res.data.result[0].value))
        .catch((err) => console.log(err));
    }

    setSearchedKey('');
  };
  return (
    <div className='top-bar-container'>
      <input
        className='search'
        onChange={(e) => {
          handleSearch(e);
        }}
        type='search'
        name=''
        id=''
      />
      <button onClick={handleSearchBtn} className='search-btn'>
        Search
      </button>
      {searchedJoke && <p>{searchedJoke}</p>}
    </div>
  );
};

export default TopBar;
