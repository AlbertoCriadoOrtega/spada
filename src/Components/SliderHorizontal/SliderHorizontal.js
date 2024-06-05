import React, { useRef, useState } from "react";
import "./SliderHorizontal.css";

const SliderHorizontal = ({ children }) => {
  // Referencias
  const refSlider = useRef(null);
  // Estados
  const [arrastrando, setArrastrando] = useState(false);
  const [posicionInicio, setPosicionInicio] = useState(0);
  const [translateActual, setTranslateActual] = useState(0);
  const [translateAnterior, setTranslateAnterior] = useState(0);

  /*
   * funcion que se ejecuta cuando el usuario arrastra el slider
   * @param {event} e - item desde donde se llama a la función
   */
  const manejarTouchStart = (e) => {
    setArrastrando(true);
    setPosicionInicio(e.touches[0].clientX);
    setTranslateAnterior(translateActual);
    refSlider.current.style.transition = "none";
  };

  /*
   * funcion que se ejecuta cuando el usuario arrastra el slider
   * @param {event} e - item desde donde se llama a la función
   */
  const manejarTouchMove = (e) => {
    if (arrastrando) {
      const nuevaPosicion = e.touches[0].clientX;
      const nuevoTranslate = translateAnterior + nuevaPosicion - posicionInicio;
      setTranslateActual(nuevoTranslate);
      refSlider.current.style.transform = `translateX(${nuevoTranslate}px)`;
    }
  };

  /*
   * funcion que se ejecuta cuando el usuario deja de arrastrar el slider
   * @param {event} e - item desde donde se llama a la función
   */
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

  /*
   * funcion que se ejecuta cuando el usuario arrastra el slider
   * @param {event} e - item desde donde se llama a la función
   */
  const deslizarSiguiente = () => {
    const anchoTarjeta = refSlider.current.children[0].offsetWidth;
    const nuevoTranslate =
      translateActual === -(anchoTarjeta * (children.length - 1))
        ? 0
        : translateActual - anchoTarjeta;
    setTranslateActual(nuevoTranslate);
    refSlider.current.style.transform = `translateX(${nuevoTranslate}px)`;
  };

  /*
   * funcion que se ejecuta cuando el usuario arrastra el slider
   * @param {event} e - item desde donde se llama a la función
   */
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
