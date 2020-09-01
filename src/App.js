// Import: Dependencies
import React from "react";

// Import: Styling
import "./App.styles.scss";

// Import: UI
import Feed from "./components/UI/Feed/Feed.component";
import Header from "./components/UI/Header/Header.component";
import Sidebar from "./components/UI/Sidebar/Sidebar.component";

// Component: App
function App() {
  return (
    <div className="App">
      <Header />

      <div className="App__body">
        <Sidebar />
        <Feed />
        {/* // Feed */}
        {/* // Widgets */}
      </div>
    </div>
  );
}

// Export: App
export default App;
