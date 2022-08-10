import Animecard from '../animecard/Animecard';
import { Grid } from '@mui/material';
import './Cards.css';

function Cards({ topanime }) {
  return (
    <div className="cards">
      <div className="cardHead">
        <h3>Top Animes</h3>
      </div>
      <div className="cardsM">
        <Grid container spacing={1}>
          {topanime.map((anime) => (
            <Grid item xs={12} sm={4} md={6} lg={2.4}>
              <Animecard
                img={anime.images.jpg.large_image_url}
                title={anime.title}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Cards;
