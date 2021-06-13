import Link from "../Link";
import logo from "../../images/rsva-logo.png"
const Navbar = () => {

  const pages = [
    {
      pageName: "About",
      pageRoute: process.env.PUBLIC_URL + "/about"
    },
    {
      pageName: "Our Work",
      pageRoute: process.env.PUBLIC_URL + "/work"
    },
    {
      pageName: "Meet The Team",
      pageRoute: process.env.PUBLIC_URL + "/team"
    }
  ]

  return (
    <div className="navbar sticky-top navbar-expand-lg navbar-dark main-bg-color p-1">
      <div className="container-fluid">
        <a href={process.env.PUBLIC_URL + "/"}>
        <img src={logo} class="rsva-logo" alt="rsva logo"/>
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

            {pages.map(page => {
              return <Link pageRoute={page.pageRoute} pageName={page.pageName}/>
            })}

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
                  <a className="dropdown-item" href="/water">
                    Water
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/fire">
                    Fire
                  </a>
                </li>
                <li>
                </li>
                <li>
                  <a className="dropdown-item" href="/mold">
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
