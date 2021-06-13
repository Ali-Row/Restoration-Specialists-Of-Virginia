import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />  
        </Router>
      <Footer />
    </>
  );
};

export default App;
