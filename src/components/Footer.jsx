import footerLogo from "../assets/footer-logo.svg";

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-container">
        <div className="footer-container-logo">
          <a href="/">
            <img src={footerLogo} alt="Tansaku!" />
          </a>
        </div>
        <p className="copyright">&copy; Tansaku! All rights reserved.</p>
      </div>
    </footer>
  );
};
