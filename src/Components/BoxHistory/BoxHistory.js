import React, { useState, useEffect } from "react";
import "./BoxHistory.css";

const texts = [
  "En la década de 1950, un equipo lucha con pasión y pocos recursos en carreras improvisadas, ganando seguidores leales.",
  "Durante los años 1960, el equipo asciende con el respaldo de un patrocinador hacia victorias más prestigiosas.",
  "En los años 1970, el equipo crece rápidamente, atrayendo patrocinadores y tecnología de vanguardia para dominar las pistas.",
  "En los años 1980, enfrentan conflictos internos y financieros, pero se recuperan con innovación y unidad hacia el éxito renovado.",
  "Para los años 1990, el equipo se consolida como un nombre conocido, manteniendo sus valores fundamentales mientras dominan en la pista.",
  "En el cambio de milenio, el equipo se adapta y lidera la evolución del automovilismo, enfrentando competencia y desafíos tecnológicos.",
  "Durante los años 2010, el equipo innova en sostenibilidad y diversidad, manteniendo su posición de liderazgo en competiciones globales.",
  "A principios de la década de 2020, la pandemia presenta desafíos, pero el equipo muestra resiliencia y determinación para seguir adelante.",
];

export default function BoxHistory({ decada }) {
  const [texto, cambiarTexto] = useState("");

  useEffect(() => {
    // Cambiar el texto según la década
    switch (decada) {
      case "50":
        cambiarTexto(texts[0]);
        break;
      case "60":
        cambiarTexto(texts[1]);
        break;
      case "70":
        cambiarTexto(texts[2]);
        break;
      case "80":
        cambiarTexto(texts[3]);
        break;
      case "90":
        cambiarTexto(texts[4]);
        break;
      case "00":
        cambiarTexto(texts[5]);
        break;
      case "10":
        cambiarTexto(texts[5]);
        break;
      case "20":
        cambiarTexto(texts[6]);
        break;
      default:
        cambiarTexto("Error 404"); // Por si hay un valor de década no reconocido
    }
  }, [decada]);

  return (
    <>
      <div className="col-12 d-flex justify-content-center">
        <div className="col-10 text-light text-center">
          <p id="decada">{texto}</p>
        </div>
      </div>
    </>
  );
}
