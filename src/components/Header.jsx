import { useState } from "react";
import headerLogo from "../assets/header-logo.svg";

export const Header = () => {
  const [collapseClass, setCollapseClass] = useState("");
  const AddCollapseClass = () => {
    setCollapseClass(collapseClass === "" ? "-collapse" : "");
  };
  return (
    <header className="page-header" id="#top">
      <div className="header-container">
        <div className="header-container-sitetitle">
          <h1 className="header-container-logo">
            <a href="/">
              <img src={headerLogo} alt="Tansaku!" />
            </a>
          </h1>
          <div className="header-container-navbtn" onClick={AddCollapseClass}>
            ボタン
          </div>
        </div>
        <nav>
          <ul className={`header-container-nav  ${collapseClass}`}>
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
        </nav>
      </div>
    </header>
  );
};
