import Animecard from '../animecard/Animecard';
import { Grid } from '@mui/material';
import './Cards.css';

function Cards({ anime }) {
  return (
    <div className="cards">
      <div className="cardsM">
        <Grid container spacing={1}>
          {anime.map((anime) => (
            <Grid item xs={12} sm={4} md={6} lg={2.4}>
              <Animecard
                img={
                  anime.images.jpg.large_image_url ?? anime.images.jpg.image_url
                }
                title={anime.title ?? anime.name}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Cards;
