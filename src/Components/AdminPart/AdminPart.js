import React, { Component } from "react";

let apiUrl = "http://localhost";
// let apiUrl = "http://34.175.58.37";

class AdminPart extends Component {
  obtenerId = async (name) => {
    return fetch(apiUrl + ":8000/api/filtrado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        minPrecio: -1,
        maxPrecio: -1,
        tipo: -1,
        ordenacion: "ascendente",
        nombre: name,
      }),
    })
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Error en la solicitud: " + response.status);
        } else if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (data !== undefined) {
          return data.piezas[0].id;
        }
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud Fetch:", error);
      });
  };

  borrarProducto = async (event) => {
    if (window.confirm("¿Seguro que quieres borrar el Pieza?")) {
      let nombre =
        event.target.parentElement.parentElement.children[1].children[0]
          .innerHTML;

      let id = await this.obtenerId(nombre);

      fetch(apiUrl + ":8000/api/piezas/" + id, {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la solicitud: " + response.status);
          }
        })
        .then((data) => {
          alert("Se ha borrado el producto");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  actualizarProducto = async (event) => {
    let nombre =
      event.target.parentElement.parentElement.children[1].children[0]
        .innerHTML;

    localStorage.setItem("nombrePieza", nombre);

    window.location.href = "/admin/actualizar";
  };

  render() {
    const { imagenURL, nombre, precio, categoria } = this.props;

    return (
      <article
        className="card mt-3 me-2 ms-2 p-1 text-white"
        id="parteRecambio"
      >
        <figure className="col-12 d-flex justify-content-center mt-3">
          <img
            src={imagenURL}
            className="col-11"
            width={200}
            height={200}
            alt=""
          />
        </figure>
        <div className="col-12 d-flex flex-column ps-3 ">
          <h5 className="col-12 m-0 fw-bolder">{nombre}</h5>
          <p className="col-12 m-0 fw-lighter"> {categoria}</p>
          <p className="col-12 m-0">
            <span className="m-0 fw-normal">
              Precio: <span className="Enfasis">{precio}</span>{" "}
              <span className="Enfasis">€</span>
            </span>
          </p>
        </div>
        <div className="col-12 d-flex ps-3 pt-2 pb-2 ">
          <button
            className="btn col-10 col-sm-6 btn-danger"
            onClick={this.borrarProducto}
          >
            borrar productos
          </button>
          <button
            className="btn col-10 col-sm-6 btn-primary"
            onClick={this.actualizarProducto}
          >
            actualizar producto
          </button>
        </div>
      </article>
    );
  }
}

export default AdminPart;
