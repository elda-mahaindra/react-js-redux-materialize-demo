// ---------------------------------------------- modules import
import React from "react";

import Login from "./components/auth/login";
// import Dashboard from "./components/layout/dashboard";
import Navbar from "./components/layout/navbar";

// ---------------------------------------------- the component
const App = () => (
  <div className="App">
    <Navbar />
    <Login />
  </div>
);

export default App;
