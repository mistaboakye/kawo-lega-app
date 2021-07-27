import React from "react";
import Footer from "../Components/Footer";
import HomeNavbar from "../Components/HomeNavbar";
import { Link } from "react-router-dom";

const backBlend = {
  backgroundBlendMode: "overlay",
  backgroundColor: "rgb(59, 12, 12)",
  backgroundImage: 'url("office.jpg")',
};

export default function KawoHome() {
  return (
    <div>
      <HomeNavbar />
      <div
        className="container-fluid container-flex office-view"
        style={backBlend}
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>KAWO LEGAL</h1>
            <br />
            <h1>
              A colaborative ecosystem for problem solvers and support for
              Startups
            </h1>
            <br />
            <Link to="/register">
              <button class="btn btn-info btn-lg text-btn">
                Register Now!
              </button>
            </Link>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
