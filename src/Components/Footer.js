import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container-fluid footer-container">
          <div className="row flex-footer">
            <div className="col-md-6 footer-txt">
              <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />; 2017
              KawoLegal All Rights Reserved. by B R A C E S T E C H
            </div>
            <div className="col-md-6 social">
              <ul>
                <li>
                  <Link to="/">
                    <span className="mdi mdi-facebook"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="mdi mdi-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="mdi mdi-linkedin"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="mdi mdi-instagram"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
