import React from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import "./OurTeam.css";

export default function OurTeam() {
  return (
    <>
      <Header />
      <div className="col-12 d-flex justify-content-center">
        <div className="col-10">
          <h1 className="mt-5 mb-4 Enfasis text-center">
            Equipo de Escudería Spada
          </h1>
          <div className="row Quote">
            <div>
              <div>
                <h5 className="text-justify col-12" style={{ lineHeight: "2" }}>
                  <p>
                    Los primeros años fueron una montaña rusa emocionante, llena
                    de altibajos, pero cada experiencia nos fortaleció y nos
                    ayudó a establecer nuestra reputación como una escudería
                    dedicada a la excelencia y la pasión por la velocidad.Cuando
                    comenzamos en la Fórmula 1 en los años 50, estábamos
                    compitiendo contra algunas de las leyendas del
                    automovilismo, pilotos intrépidos que estaban dispuestos a
                    enfrentarse a cualquier desafío.
                  </p>
                </h5>
              </div>

              <div>
                <div className="row mt-1 d-flex justify-content-end">
                  <div className="col-12 col-md-3 d-flex flex-column justify-content-end">
                    <div className="col-12 d-flex justify-content-center">
                      <img
                        className="img-fluid col-6 rounded-circle"
                        src="https://images.pexels.com/photos/3824772/pexels-photo-3824772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Dueño de la escuderia"
                      ></img>
                    </div>
                    <h4 className="text-center mt-3">Francesco De Luca</h4>
                    <p className="text-center">Creador de la escudería</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row Quote mt-5">
            <div>
              <div>
                <h5 className="text-end col-12" style={{ lineHeight: "2" }}>
                  <p>
                    Hoy en día, nuestra mentalidad sigue siendo la misma: la
                    búsqueda constante de la excelencia. Pero ahora contamos con
                    tecnología de vanguardia y un equipo altamente capacitado
                    que nos permite competir al más alto nivel en cada carrera.
                    Nos hemos adaptado a los cambios en el deporte del
                    automovilismo, desde la introducción de nuevas regulaciones
                    hasta la innovación en diseño y estrategia de carrera.
                  </p>
                </h5>
              </div>

              <div>
                <div className="row mt-1 d-flex ">
                  <div className="col-12 col-md-3 d-flex flex-column justify-content-end">
                    <div className="col-12 d-flex justify-content-center">
                      <img
                        className="img-fluid col-6 rounded-circle"
                        src="https://images.pexels.com/photos/3808822/pexels-photo-3808822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Dueño de la escuderia"
                      ></img>
                    </div>

                    <h4 className="text-center mt-3">Giovanna De Luca</h4>
                    <p className="text-center">CEO Actual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
