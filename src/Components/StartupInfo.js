import React from "react";
import { Link } from "react-router-dom";

export default function StartupInfo() {
  return (
    <div>
      <div className="col-md-10 content">
        <div className="col-md-10">
          <form className="navbar-form navbar-left"></form>
        </div>
        <div className="list">
          <ul>
            <li>
              <div className="col-md-12">
                <div className="col-md-2">
                  <div className="profile">
                    <br />
                    <img
                      src={"tutahub.jpeg"}
                      alt=""
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <h3>tutahub</h3>
                  <p>a website for tutorials</p>
                  <Link to="/startups">
                    <button type="submit" className="btn btn-default">
                      See full details
                    </button>
                  </Link>
                  <hr />
                </div>
                <div className="col-md-2"></div>
              </div>
            </li>
            <li>
              <div className="col-md-12">
                <div className="col-md-2">
                  <div className="profile">
                    <br />
                    <img
                      src={"anditer.jpeg"}
                      alt="anditer"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <h3>Antider</h3>
                  <p>Anditer is a tech blog</p>
                  <Link to="/startups">
                    <button type="submit" class="btn btn-default">
                      See full details
                    </button>
                  </Link>
                  <hr />
                </div>
                <div className="col-md-2"></div>
              </div>
            </li>
            <li>
              <div className="col-md-12">
                <div className="col-md-2">
                  <div className="profile">
                    <br />
                    <img
                      src={"Think&Zoom.png"}
                      alt="Think & Zoom"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <h3>Think and Zoom</h3>
                  <p>
                    Providing solutions for the visually impaired, such as
                    mind-controlled zooming, and wearable controlled zooming.
                  </p>
                  <Link to="/startups">
                    <button type="submit" class="btn btn-default">
                      See full details
                    </button>
                  </Link>
                  <hr />
                </div>
                <div className="col-md-2"></div>
              </div>
            </li>
            <li>
              <div className="col-md-12">
                <div className="col-md-2">
                  <div className="profile">
                    <br />
                    <img
                      src="slatecube.png"
                      alt="slatecube"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <h3>Slatecube</h3>
                  <p>
                    Slatecube helps job seekers develop job-relevant skills,
                    gain work experience, and land well paying jobs through
                    world-class up-skilling courses and virtual internships
                  </p>
                  <Link to="/startups">
                    <button type="submit" class="btn btn-default">
                      See full details
                    </button>
                  </Link>
                  <hr />
                </div>
                <div className="col-md-2"></div>
              </div>
            </li>
            <li>
              <div className="col-md-12">
                <div className="col-md-2">
                  <div className="profile">
                    <br />
                    <img
                      src="sleekjob.png"
                      alt="sleekjob"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <h3>Sleekjob</h3>
                  <p>
                    Trains world class software developers in Ghana and matches
                    them to employment opportunities.
                  </p>
                  <Link to="/startups">
                    <button type="submit" class="btn btn-default">
                      See full details
                    </button>
                  </Link>
                  <hr />
                </div>
                <div className="col-md-2"></div>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-md-1">I am here</div>
      </div>
    </div>
  );
}
