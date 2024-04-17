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
      <CartaTextoHistoria
        idDiv="11"
        textoInterno="1950"
        enlaceScroll="#22"
        textoParrafo="50"
      />
      <CartaTextoHistoria
        idDiv="22"
        textoInterno="1960"
        enlaceScroll="#33"
        textoParrafo="60"
      />
      <CartaTextoHistoria
        idDiv="33"
        textoInterno="1970"
        enlaceScroll="#44"
        textoParrafo="70"
      />
      <CartaTextoHistoria
        idDiv="44"
        textoInterno="1980"
        enlaceScroll="#55"
        textoParrafo="80"
      />
      <CartaTextoHistoria
        idDiv="55"
        textoInterno="1990"
        enlaceScroll="#66"
        textoParrafo="90"
      />
      <CartaTextoHistoria
        idDiv="66"
        textoInterno="2000"
        enlaceScroll="#77"
        textoParrafo="00"
      />
      <CartaTextoHistoria
        idDiv="77"
        textoInterno="2010"
        enlaceScroll="#88"
        textoParrafo="10"
      />
      <CartaTextoHistoria
        idDiv="88"
        textoInterno="2010"
        enlaceScroll="#99"
        textoParrafo="20"
      />
    </>
  );
}

export default App;
