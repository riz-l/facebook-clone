// Import: Dependencies
import React, { useState } from "react";

// Import: Styling
import "./MessageSender.styles.scss";

// Import: Material UI Icons
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideocamIcon from "@material-ui/icons/Videocam";

// Import: Material Core
import { Avatar } from "@material-ui/core";

// Import: StateProvider
import { useStateValue } from "../../../../StateProvider";

// Import: Firebase
import firebase from "firebase";

// Import: Firebase Firestore DB
import db from "../../../../firebase";

// UI: MessageSender
function MessageSender() {
  // StateProvider = user
  const [{ user }, dispatch] = useStateValue();

  // State = input, imageUrl
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // handleSubmit = onClick for form button
  const handleSubmit = (e) => {
    // Prevents page from refreshing on Submit
    e.preventDefault();

    // Binds input fields to Firebase Firestore DB on Submit
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePicture: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    // Reset input and imageUrl states to empty strings
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="MessageSender">
      <div className="MessageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="MessageSender__input"
            type="text"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="MessageSender__bottom">
        <div className="MessageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="MessageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>

        <div className="MessageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}

// Export: MessageSender
export default MessageSender;
