import logo from "../../images/rsva-logo.png"

const Footer = () => {
  return (
    <>
    <footer className="main-bg-color page-bottom-footer py-5">
        <div className="text-center">
            <img className="footer-logo" src={logo} alt="rsva logo"/>
        </div>
    </footer>
    <div className="footer-bottom text-light text-center">
    Copyright © {new Date().getFullYear()} Restoration Specialists of Virginia. All rights reserved. Website built by <a className="text-light" href="https://www.github.com/ali-row">Alistair Rowden</a>
    </div>  
    </>
  );
};

export default Footer;