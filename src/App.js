// ---------------------------------------------- modules import
import React from "react";

// import Login from "./components/auth/login";
import Register from "./components/auth/register";
// import Dashboard from "./components/layout/dashboard";
import Navbar from "./components/layout/navbar";

// ---------------------------------------------- the component
const App = () => (
  <div className="App">
    <Navbar />
    <Register />
  </div>
);

export default App;
