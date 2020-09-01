// Import: Dependencies
import React from "react";

// Import: Styling
import "./Post.styles.scss";

// Import: Material UI Icons
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons";

// Import: Material Core
import { Avatar } from "@material-ui/core";

// UI: Post
function Post({ profilePicture, image, username, timestamp, message }) {
  return (
    <div className="Post">
      <div className="Post__top">
        <Avatar className="Post__avatar" src={profilePicture} />
        <div className="Post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="Post__bottom">
        <p>{message}</p>
      </div>

      <div className="Post__image">
        <img src={image} alt="" />
      </div>

      <div className="Post__options">
        <div className="Post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className="Post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="Post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="Post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

// Export: Post
export default Post;
