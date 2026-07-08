import React from "react";
// import Profile from "./Profile";
// import Navbar from "./Navbar";
import UserContext from "./UserContext";
import { ThemeContext } from "./ThemeContext";



function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
      {/* <Navbar/>       */}
      <UserContext/>
      <ThemeContext/>
    </div>
  );
}

export default App;
