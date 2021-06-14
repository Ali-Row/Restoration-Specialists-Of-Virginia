import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar>
          <li className="top-nav-link">
            <NavLink
              activeClassName="active route-active"
              className="nav-link nav-over"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active route-active"
              className="nav-link nav-over"
              to="/work"
            >
              Our Work
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active route-active"
              className="nav-link nav-over"
              to="/team"
            >
              Meet The Team
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active route-active"
              className="nav-link nav-over"
              to="/testimonials"
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active route-active"
              className="nav-link nav-over"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
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
