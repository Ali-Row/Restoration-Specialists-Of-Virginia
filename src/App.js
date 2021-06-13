import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import { BrowserRouter as Router, Route } from "react-router-dom";
// Use HashRouter when deploying
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
        <Router basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />  
        </Router>
      <Footer />
    </>
  );
};

export default App;
