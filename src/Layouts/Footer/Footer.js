import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="text-center text-white" id="footer">
          <section className="p-4 pb-0">
            <h2 className="text-uppercase">Siguenos en redes</h2>
            <div className="row d-flex justify-content-center">
              <a
                href="http://localhost:8000/Game"
                className="w-auto text-light text-decoration-none"
              >
                <i className="bi bi-instagram fs-3"></i>
              </a>
              <a
                href="www.twitter.com"
                className="w-auto text-light text-decoration-none"
              >
                <i className="bi bi-twitter-x fs-3"></i>
              </a>
              <a
                href="www.facebook.com"
                className="w-auto text-light text-decoration-none"
              >
                <i className="bi bi-facebook fs-3"></i>
              </a>
            </div>
          </section>

          <div className="text-center p-3 text-light" id="copyright">
            © 2024 Copyright:&nbsp;
            <a className="text-white" href="">
              Scuderia Spada.com
            </a>
          </div>
        </footer>
      </>
    );
  }
}
