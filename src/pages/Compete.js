import Cards from '../components/cards/Cards';
import { useEffect, useState } from 'react';

function Compete() {
  const [anime, setAnime] = useState([]);
  const getAnime = async () => {
    const temp = await fetch('https://api.jikan.moe/v4/anime').then((res) =>
      res.json()
    );
    setAnime(temp.data);
    console.log(temp);
  };
  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div>
      <Cards anime={anime} />
    </div>
  );
}

export default Compete;
