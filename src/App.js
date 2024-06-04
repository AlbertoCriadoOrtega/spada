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
import Carrito from "./views/Carrito/Carrito";
import AdminCrear from "./views/CrearProducto/CrearProducto";
import AdminActualizar from "./views/ActualizarProducto/ActualizarProducto";
import Pedido from "./views/Pedido/Pedido";
import PestanaUsuario from "./views/PestanaUsuario/PestanaUsuario";
import CambiarDatosUser from "./views/CambiarDatosUser/CambiarDatosUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<OurHistory />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/usuario" element={<User />} />
        <Route path="/iniciar-sesion" element={<LogIn />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/ssv" element={<SSV />} />
        <Route path="/coches" element={<Cars />} />
        <Route path="/equipo" element={<OurTeam />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin/crear" element={<AdminCrear />} />
        <Route path="/admin/actualizar" element={<AdminActualizar />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/zona-personal" element={<PestanaUsuario />} />
        <Route path="/cambiar-datos" element={<CambiarDatosUser />} />
      </Routes>
    </Router>
  );
}

export default App;
