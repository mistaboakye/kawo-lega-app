import React from "react";
import { Link } from "react-router-dom";

const navColor = {
  color: "#D14233",
};

export default function HomeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-home startups navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              <img
                src={"kawo-legal-logo.png"}
                alt="kawo-legal-logo"
                className="img-responsive logo"
              />
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <div>
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <Link to="/" style={navColor}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/startups" style={navColor}>
                    Startups
                  </Link>
                </li>
                <li>
                  <Link to="/register" style={navColor}>
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" style={navColor}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
