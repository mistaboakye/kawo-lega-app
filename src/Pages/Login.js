import React from "react";
import Footer from "../Components/Footer";
import OtherNavbar from "../Components/OtherNavbar";

export default function Login() {
  return (
    <div>
      <div>
        <OtherNavbar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8 content">
            <h3>Already a Member? Login to add your Startup.</h3>

            <br />

            <div className="signup">
              <form
                method="post"
                action="http://www.kawolegal.com/backend/login"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="tkDd75odBg5JLCsKK7aANlyQYy4M4RkFPOrR3wQK"
                />
                <div className="form-group">
                  <label for="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="Email"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label for="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="Password"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
