import Animecard from '../animecard/Animecard';
import { Grid } from '@mui/material';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <div className="cardHead">
        <h3>Top Animes</h3>
      </div>
      <div className="cardsM">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={6} lg={2.4}>
            <Animecard
              img={
                'https://indwallpapers.com/wp-content/uploads/2021/04/Naruto-Wallpaper-581x1024.jpeg'
              }
              title={'Naruto'}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={2.4}>
            <Animecard
              img={
                'https://indwallpapers.com/wp-content/uploads/2022/05/Kid-Goku-Wallpaper.jpg'
              }
              title={'Dragon ball'}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={2.4}>
            <Animecard
              img={
                'https://i.pinimg.com/originals/cb/12/b6/cb12b6435e3a7afbaeea1bf972ec0d4d.jpg'
              }
              title={'Attacks on titan'}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={2.4}>
            <Animecard
              img={'https://cdn.wallpapersafari.com/32/68/M5GgzU.jpg'}
              title={'Demon slayer'}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={2.4}>
            <Animecard
              img={
                'http://m.gettywallpapers.com/wp-content/uploads/2020/04/one-piece-wallpaper-phone.jpg'
              }
              title={'One piece'}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Cards;
