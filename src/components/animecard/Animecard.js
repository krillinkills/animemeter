import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Animecard.css';

function Animecard({ img, title }) {
  return (
    <div className="animeCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="400" image={img} alt="" />
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </Card>
    </div>
  );
}

export default Animecard;
