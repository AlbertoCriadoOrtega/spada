import React from "react";

export default function IconoUsuario() {
  if (localStorage.getItem("session") !== "true") {
    return <i className="bi bi-person-fill fs-1"></i>;
  } else {
    return <i className="bi bi-house-door-fill fs-1"></i>;
  }
}
