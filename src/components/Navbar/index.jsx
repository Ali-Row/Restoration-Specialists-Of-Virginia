import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {

  const route = window.location.pathname;

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark main-bg-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          RSVA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={route === '/about' ? "nav-link active route-active" : "nav-link nav-over"} aria-current="page" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={route === '/work' ? "nav-link active route-active" : "nav-link nav-over"} href="/work">
                Our Work
              </a>
            </li>
            <li className="nav-item">
              <a className={route === '/team' ? "nav-link active route-active" : "nav-link nav-over"} href="/team">
                Meet The Team
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-over dropdown-toggle"
                href="/na"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Other
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/na">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/na">
                    Another action
                  </a>
                </li>
                <li>
                </li>
                <li>
                  <a className="dropdown-item" href="/na">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar;
