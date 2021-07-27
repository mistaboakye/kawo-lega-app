import React from "react";
import { Link } from "react-router-dom";

const navcolor = { color: "#D14233" };

export default function OtherNavbar() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-home startups">
        <div className="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              <img
                src={"kawo-legal-logo.png"}
                alt="kawo legal logo"
                className="img-responsive logo"
                width="200px"
                height="90px"
              />
            </Link>
          </div>

          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <Link className="nav navbar-nav navbar-right">
              <li>
                <Link to="/" style={navcolor}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/startups" style={navcolor}>
                  Startups
                </Link>
              </li>
              <li>
                <Link to="/register" style={navcolor}>
                  Register
                </Link>
              </li>
              <li>
                <Link to="login" style={navcolor}>
                  Login
                </Link>
              </li>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
