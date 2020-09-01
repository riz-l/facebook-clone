// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Styling
import "./Feed.styles.scss";

// Import: UI
import MessageSender from "./MessageSender/MessageSender.component";
import Post from "./Post/Post.component";
import StoryReel from "./StoryReel/StoryReel.component";

// Import: Firebase Firestore DB
import db from "../../../firebase";

// UI: Feed
function Feed() {
  // State = posts
  const [posts, setPosts] = useState([]);

  // Load posts from the Firebase Firestore DB upon load
  useEffect(() => {
    // Gets a real-time snapshot of the Firestore 'posts' collection
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="Feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePicture={post.data.profilePicture}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

// Export: Feed
export default Feed;
