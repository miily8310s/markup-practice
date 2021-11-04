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
        <ul className="footer-pages-nav">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">最新の特集</a>
          </li>
          <li>
            <a href="/">地域別に読む</a>
          </li>
          <li>
            <a href="/">連載一覧</a>
          </li>
          <li>
            <a href="/">インタビュー</a>
          </li>
        </ul>
        <ul className="footer-pages-nav -about">
          <li>
            <a href="/">このサイトについて</a>
          </li>
          <li>
            <a href="/">運営会社</a>
          </li>
        </ul>
        <p className="copyright">&copy; Tansaku! All rights reserved.</p>
      </div>
    </footer>
  );
};
