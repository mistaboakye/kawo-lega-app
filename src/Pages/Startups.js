import React from "react";
import Footer from "../Components/Footer";
import OtherNavbar from "../Components/OtherNavbar";
import StartupInfo from "../Components/StartupInfo";

export default function Startups() {
  return (
    <div>
      <div>
        <OtherNavbar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control search-bar"
              name="x"
              id="search"
              placeholder="search Startup by the name of industry"
            />
          </div>
          <div className="col-md-2">
            <button type="submit" class="btn btn-primary">
              <span className="glyphicon glyphicon-search"></span>
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <StartupInfo />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
