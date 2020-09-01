// Import: Dependencies
import React from "react";

// Import: Styling
import "./Header.styles.scss";

// Import: Material UI Icons
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Import: Material Core
import { Avatar, IconButton } from "@material-ui/core";

// Import: StateProvider
import { useStateValue } from "../../../StateProvider";

// UI: Header
function Header() {
  // StateProvider = user
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="Header">
      <div className="Header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook Logo"
        />
        <div className="Header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="Header__center">
        <div title="Home" className="Header__option Header__option-active">
          <HomeIcon fontSize="large" />
        </div>
        <div title="Pages" className="Header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div title="Watch" className="Header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div title="Marketplace" className="Header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div title="Groups" className="Header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="Header__right">
        <div className="Header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

// Export: Header
export default Header;
