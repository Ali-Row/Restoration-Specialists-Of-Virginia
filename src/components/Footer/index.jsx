import logo from "../../images/rsva-logo.png";
import facebookLogo from "./FooterImages/facebook-logo.png";
import yelpLogo from "./FooterImages/yelp-logo.png";
import googleLogo from "./FooterImages/google-logo.png";

const Footer = () => {
  return (
    <>
    <footer className="container-fluid main-bg-color page-bottom-footer py-5">
      <div className="row">
        <div className="col-md-4 text-center">
            <img className="footer-logo" src={logo} alt="rsva logo"/>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4 footer-social-links d-flex align-items-center justify-content-between text-center flex-column">
          <a href="/"><img className="fb-logo zoom" src={facebookLogo} alt="facebook logo" /></a>    
          <a href="/"><img className="yelp-logo zoom" src={yelpLogo} alt="yelp logo" /></a>    
          <a href="/"><img className="google-logo zoom" src={googleLogo} alt="google logo" /></a>    
        </div>
      </div>
       
    </footer>
    <div className="footer-bottom text-light text-center">
    Copyright © {new Date().getFullYear()} Restoration Specialists of Virginia. All rights reserved. Website built by <a className="text-light" href="https://www.github.com/ali-row">Alistair Rowden</a>
    </div>  
    </>
  );
};

export default Footer;