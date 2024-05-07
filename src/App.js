import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./views/LogIn/LogIn";
import SignUp from "./views/SignUp/SignUp";
import Home from "./views/Home/Home";
import OurHistory from "./views/OurHistory/OurHistory";
import Store from "./views/Store/Store";
import User from "./views/User/User";
import SSV from "./views/SSV/SSV";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/store" element={<Store />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ssv" element={<SSV />} />
        {/* Add more routes as needed for other views */}
      </Routes>
    </Router>
  );
}

export default App;
