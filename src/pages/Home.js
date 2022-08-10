import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/herosection/Hero';
import Cards from '../components/cards/Cards';
import { useState, useEffect } from 'react';

function Home() {
  const [anime, setAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);

  const getTopAnime = async () => {
    const temp = await fetch('https://api.jikan.moe/v4/top/anime').then((res) =>
      res.json()
    );

    setTopAnime(temp.data.slice(0, 5));
  };

  useEffect(() => {
    getTopAnime();
  }, []);
  console.log(topAnime);

  return (
    <div>
      <Navbar />
      <Hero />
      <Cards topanime={topAnime} />
    </div>
  );
}

export default Home;
