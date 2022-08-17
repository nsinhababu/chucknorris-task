import axios from 'axios';
import { useEffect, useState } from 'react';
const Random = () => {
  const [randomJoke, setRandomJoke] = useState('');
  useEffect(() => {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then((res) => setRandomJoke(res.data.value))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Random</h2>
      {randomJoke && <p> {randomJoke}</p>}
    </div>
  );
};

export default Random;
