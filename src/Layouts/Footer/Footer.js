import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="text-center text-white" id="footer">
          <section className="p-4 pb-0">
            <h2>Follow us in social media</h2>
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
          <div className="container p-4 pb-0">
            <section>
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong className="text-light">
                        Sign up for our newsletter
                      </strong>
                    </p>
                  </div>
                  <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        className="form-control"
                      />
                      <label
                        className="form-label text-light mt-2"
                        htmlFor="form5Example2"
                      >
                        Email address
                      </label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <button
                      type="submit"
                      className="btn btn-outline-light mb-4"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>

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
