import { useState } from "react";
import logo from "../../images/navbar-logo.png"
import hamburgerIcon from "../../images/hamburger-icon.png";
import xIcon from "../../images/x-icon.png";
const Navbar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar sticky-top navbar-expand-lg navbar-dark main-bg-color p-1">
      <div className="container-fluid">
        <a className="logo-wrapper" href={process.env.PUBLIC_URL + "/#/"}>
        <img src={logo} className="navbar-logo" alt="rsva logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
        >
          {isOpen ? <img className="nav-icons animate__animated animate__fadeIn animate__fast" src={xIcon} alt="Close button"></img> : <img className="nav-icons" src={hamburgerIcon} alt="Hamburger menu"></img>} 
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {children}
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-over dropdown-toggle"
                href="/na"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href={process.env.PUBLIC_URL + "/#/water"}>
                    Water
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={process.env.PUBLIC_URL + "/#/fire"}>
                    Fire
                  </a>
                </li>
                <li>
                </li>
                <li>
                  <a className="dropdown-item" href={process.env.PUBLIC_URL + "/#/mold"}>
                    Mold
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
