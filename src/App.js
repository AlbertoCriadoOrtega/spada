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
import Cars from "./views/Cars/Cars";
import OurTeam from "./views/OurTeam/OurTeam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<OurHistory />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/usuario" element={<User />} />
        <Route path="/registro" element={<LogIn />} />
        <Route path="/iniciar-sesion" element={<SignUp />} />
        <Route path="/ssv" element={<SSV />} />
        <Route path="/coches" element={<Cars />} />
        <Route path="/equipo" element={<OurTeam />} />
      </Routes>
    </Router>
  );
}

export default App;
