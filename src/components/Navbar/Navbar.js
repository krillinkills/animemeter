import { Button, Avatar } from '@mui/material';
//import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">Anime meter</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Weeb</li>
          <li className="topListItem">Leaderboard</li>
          <li className="topListItem">Compete</li>
        </ul>
      </div>
      <div className="topRight">
        <Button
          className="topButton"
          variant="outlined"
          size="small"
          color="error"
        >
          Get started
        </Button>

        {/* <ChatBubbleOutlineOutlinedIcon
          className="chat"
          sx={{ fontSize: 30 }}
        ></ChatBubbleOutlineOutlinedIcon>

        <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="" /> */}
      </div>
    </div>
  );
};

export default Navbar;
