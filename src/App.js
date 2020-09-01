// Import: Dependencies
import React from "react";

// Import: Styling
import "./App.styles.scss";

// Import: pages
import Login from "./components/pages/Login/Login.component";

// Import: UI
import Feed from "./components/UI/Feed/Feed.component";
import Header from "./components/UI/Header/Header.component";
import Sidebar from "./components/UI/Sidebar/Sidebar.component";
import Widgets from "./components/UI/Widgets/Widgets.component";

// Import: StateProvider
import { useStateValue } from "./StateProvider";

// Component: App
function App() {
  // StateProvider = user
  const [{ user }, dispatch] = useStateValue();

  // If user !== true, show Login screen
  // If user === true, show Facebook dashboard
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="App__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

// Export: App
export default App;
