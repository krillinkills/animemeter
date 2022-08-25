import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/herosection/Hero';
import Cards from '../components/cards/Cards';
import { useState, useEffect } from 'react';

function Home() {
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

  return (
    <div>
      core.autocrlf
      <Navbar />
      <Hero />
      <div className="cardHead">
        <h3>Top Animes</h3>
      </div>
      <Cards anime={topAnime} />
    </div>
  );
}

export default Home;
