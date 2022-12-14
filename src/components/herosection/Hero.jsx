import { Button } from '@mui/material';

import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <img
        className="heroImg"
        src="https://wallpapers-hub.art/wallpaper-images/39044.jpg"
        alt=""
      />
      <div className="heroHeading">
        <div className="heroButton">
          <Button variant="contained" size="large" color="error">
            Compete
          </Button>
        </div>
        <h1 className="heroTitle">
          Become a <a className="weeb">Weeb</a>
        </h1>
        <h4 className="heroTitleA">
          Compete with other weebs and earn weeb points
        </h4>
      </div>
    </div>
  );
}

export default Hero;

//

//https://wallpapercave.com/wp/wp3914171.jpg
