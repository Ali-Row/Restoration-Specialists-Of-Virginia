import logo from "../../images/rsva-logo.png"

const Footer = () => {
  return (
    <>
    <footer className="main-bg-color page-bottom-footer py-5">
        <div className="text-center">
            <img className="footer-logo" src={logo} alt="rsva logo"/>
        </div>
    </footer>
    <div className="footer-bottom"></div>  
    </>
  );
};

export default Footer;