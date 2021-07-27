import React from "react";
import Footer from "../Components/Footer";
import OtherNavbar from "../Components/OtherNavbar";

export default function Register() {
  return (
    <div>
      <div>
        <OtherNavbar />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8 content">
            <h3>Join KawoLegal. Sign up to get your Startup listed now!</h3>

            <br />

            <div className="signup">
              <form
                method="post"
                action="http://www.kawolegal.com/backend/register"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="tkDd75odBg5JLCsKK7aANlyQYy4M4RkFPOrR3wQK"
                />
                <div className="form-group">
                  <label for="fullName">Full Name</label>
                  <input
                    type="test"
                    className="form-control"
                    name="name"
                    id="fullName"
                    placeholder="Full Name"
                    required=""
                  />
                </div>

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
                <div className="form-group">
                  <label for="password-confirm">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password_confirmation"
                    id="password-confirm"
                    placeholder="Confirm Password"
                    required=""
                  />
                </div>
                <input type="hidden" name="status" value="founder" />

                <button type="submit" className="btn btn-primary">
                  Sign up
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
