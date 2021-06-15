import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {

  const pages = [
    {
      pageName: "About",
      pageRoute: "/about"
    },
    {
      pageName: "Our Work",
      pageRoute: "/work"
    },
    {
      pageName: "Meet The Team",
      pageRoute: "/team"
    },
    {
      pageName: "Testimonials",
      pageRoute: "/testimonials"
    },
    {
      pageName: "Contact",
      pageRoute: "/contact"
    },
  ]

  return (
    <>
      <Router>
        <Navbar>
          {pages.map(page => {
            return <li>
                <NavLink
                  activeClassName="active route-active"
                  className="nav-link nav-over"
                  to={page.pageRoute}>
                  {page.pageName}
                </NavLink>
              </li>
          })}
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
