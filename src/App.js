import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./views/LogIn/LogIn";
import SignUp from "./views/SignUp/SignUp";
import Home from "./views/Home/Home";
import OurHistory from "./views/OurHistory/OurHistory";
import Store from "./views/Store/Store";
import SSV from "./views/SSV/SSV";
import Cars from "./views/Cars/Cars";
import OurTeam from "./views/OurTeam/OurTeam";
import Carrito from "./views/Carrito/Carrito";
import CrearProducto from "./views/CrearProducto/CrearProducto";
import AdminActualizar from "./views/ActualizarProducto/ActualizarProducto";
import Pedido from "./views/Pedido/Pedido";
import PestanaUsuario from "./views/PestanaUsuario/PestanaUsuario";
import CambiarDatosUser from "./views/CambiarDatosUser/CambiarDatosUser";
import AdminStore from "./views/AdminStore/AdminStore";
import Pedidos from "./views/Pedidos/Pedidos";
import PedidoHecho from "./views/PedidoHecho/PedidoHecho";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<OurHistory />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/iniciar-sesion" element={<LogIn />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/ssv" element={<SSV />} />
        <Route path="/coches" element={<Cars />} />
        <Route path="/equipo" element={<OurTeam />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin/crear" element={<CrearProducto />} />
        <Route path="/admin/actualizar" element={<AdminActualizar />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/zona-personal" element={<PestanaUsuario />} />
        <Route path="/cambiar-datos" element={<CambiarDatosUser />} />
        <Route path="/admin/tienda" element={<AdminStore />} />
        <Route path="/usuario/pedidos" element={<Pedidos />} />
        <Route path="/pedidos/pedido" element={<PedidoHecho></PedidoHecho>} />
      </Routes>
    </Router>
  );
}

export default App;
