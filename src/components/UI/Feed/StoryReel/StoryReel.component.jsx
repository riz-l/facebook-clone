// Import: Dependencies
import React from "react";

// Import: Styling
import "./StoryReel.styles.scss";

// Import: UI
import Story from "./Story/Story.component";

// UI: StoryReel
function StoryReel() {
  return (
    <div className="StoryReel">
      <Story
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
        profileSrc="https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        title="User 1"
      />
      <Story
        image="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80"
        profileSrc="https://images.unsplash.com/photo-1582152629442-4a864303fb96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="User 2"
      />
      <Story
        image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
        title="User 3"
      />
      <Story
        image="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        profileSrc="https://images.unsplash.com/photo-1595183185548-a52125c79ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
        title="User 4"
      />
      <Story
        image="https://images.unsplash.com/photo-1555947970-15e7a8a0bb73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
        profileSrc="https://images.unsplash.com/photo-1570097145294-a5005cd312c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="User 5"
      />
    </div>
  );
}

// Export: StoryReel
export default StoryReel;
