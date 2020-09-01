// Import: Dependencies
import React from "react";

// Import: Styling
import "./Story.styles.scss";

// Import: Material UI Core
import { Avatar } from "@material-ui/core";

// UI: Story
function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="Story">
      <Avatar className="Story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

// Export: Story
export default Story;
