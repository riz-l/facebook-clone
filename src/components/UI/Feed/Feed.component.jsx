// Import: Dependencies
import React from "react";

// Import: Styling
import "./Feed.styles.scss";

// Import: UI
import MessageSender from "./MessageSender/MessageSender.component";
import StoryReel from "./StoryReel/StoryReel.component";

// UI: Feed
function Feed() {
  return (
    <div className="Feed">
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
    </div>
  );
}

// Export: Feed
export default Feed;
