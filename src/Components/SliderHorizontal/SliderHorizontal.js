import React, { useRef, useState } from "react";
import "./SliderHorizontal.css";

const SliderHorizontal = ({ children }) => {
  const refSlider = useRef(null);
  const [arrastrando, setArrastrando] = useState(false);
  const [posicionInicio, setPosicionInicio] = useState(0);
  const [translateActual, setTranslateActual] = useState(0);
  const [translateAnterior, setTranslateAnterior] = useState(0);

  const manejarTouchStart = (e) => {
    setArrastrando(true);
    setPosicionInicio(e.touches[0].clientX);
    setTranslateAnterior(translateActual);
    refSlider.current.style.transition = "none";
  };

  const manejarTouchMove = (e) => {
    if (arrastrando) {
      const nuevaPosicion = e.touches[0].clientX;
      const nuevoTranslate = translateAnterior + nuevaPosicion - posicionInicio;
      setTranslateActual(nuevoTranslate);
      refSlider.current.style.transform = `translateX(${nuevoTranslate}px)`;
    }
  };

  const manejarTouchEnd = () => {
    setArrastrando(false);
    const umbral = 100;
    const cantidadMovimiento = Math.abs(translateActual - translateAnterior);

    if (cantidadMovimiento > umbral) {
      translateActual < translateAnterior
        ? deslizarSiguiente()
        : deslizarAnterior();
    } else {
      refSlider.current.style.transform = `translateX(${translateAnterior}px)`;
    }

    refSlider.current.style.transition = "transform 0.5s ease";
  };

  const deslizarSiguiente = () => {
    const anchoTarjeta = refSlider.current.children[0].offsetWidth;
    const nuevoTranslate =
      translateActual === -(anchoTarjeta * (children.length - 1))
        ? 0
        : translateActual - anchoTarjeta;
    setTranslateActual(nuevoTranslate);
    refSlider.current.style.transform = `translateX(${nuevoTranslate}px)`;
  };

  const deslizarAnterior = () => {
    const anchoTarjeta = refSlider.current.children[0].offsetWidth;
    const nuevoTranslate =
      translateActual === 0
        ? -(anchoTarjeta * (children.length - 1))
        : translateActual + anchoTarjeta;
    setTranslateActual(nuevoTranslate);
    refSlider.current.style.transform = `translateX(${nuevoTranslate}px)`;
  };

  return (
    <div
      ref={refSlider}
      className="slider col-12"
      onTouchStart={manejarTouchStart}
      onTouchMove={manejarTouchMove}
      onTouchEnd={manejarTouchEnd}
    >
      <div className="slider-inner">
        {children.map((child, index) => (
          <div key={index} className="slider-item">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderHorizontal;
