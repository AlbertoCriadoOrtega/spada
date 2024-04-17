import "./App.css";
import CartaTituloHistoria from "./Components/CartaTituloHistoria/CartaTituloHistoria";
import CartaTextoHistoria from "./Components/CartaTextoHistoria/CartaTextoHistoria";
import Navegacion from "./Layouts/Header/Header";

function App() {
  return (
    <>
      <Navegacion />
      <CartaTituloHistoria
        idDiv=""
        textoInterno="Nuestra historia"
        enlaceScroll="#11"
      />
      <CartaTextoHistoria idDiv="11" textoInterno="2010" enlaceScroll="#" />
    </>
  );
}

export default App;
