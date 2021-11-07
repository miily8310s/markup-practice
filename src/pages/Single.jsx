import treeImage from "../assets/tree.jpg";
import skyImage from "../assets/sky.jpg";
import lakeImage from "../assets/lake.jpg";
import buildingImage from "../assets/building.jpg";
import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";

export const Single = () => {
  return (
    <div className="singlePage">
      <header className="singlePageHeader">
        <p className="singlePageHeaderTitleSub">Web designer's portfolio</p>
        <h1 className="singlePageHeaderTitle">HI, MY NAME IS...</h1>
        <p className="singlePageHeaderDescription">
          Check out some of my works.
        </p>
        <div className="singlePageHeaderButtons">
          <a className="singlePageButton" href="#about">
            LEARN MORE
          </a>
          <a className="singlePageButton -showy" href="#contact">
            SEND MESSAGE
          </a>
        </div>
      </header>
      <div className="singlePageAbout" id="about">
        <h2 className="singlePageHeading">ABOUT ME</h2>
        <div className="singlePageAboutTexts">
          <p className="singlePageAboutText">
            はじめまして。日本でWebデザイナーをしています。
            <br />
            デザインの専門学校を卒業し、制作会社での業務経験を経て、現在はフリーランスとして働いています。
          </p>
          <p className="singlePageAboutText">
            このサイトは「HTML/CSS
            モダンコーディング」という書籍のサンプルとして作られた、架空のWebデザイナーのポートフォリオサイトです。
            <br />
            このサンプルのようなサイトをいちから作る過程を通して、HTMLとCSSの実践的なコーディングノウハウを学ぶことができます。
          </p>
        </div>
      </div>
      <div className="singlePageWorks">
        <h2 className="singlePageHeading">WORKS</h2>
        <div className="singlePageWorksWrapper">
          <div className="singlePageWorkBox">
            <img
              src={treeImage}
              alt="制作事例1"
              className="singlePageWorkBoxImage"
            />
            <p className="singlePageWorkBoxText">
              ひとつめの制作事例が入ります。
              <br />
              簡単な説明が入ります。
              <br />
              使用ツール：XXX, XXX, XXX
              <br />
              <a href="/" className="singlePageButton -work">
                READ MORE
              </a>
            </p>
          </div>
          <div className="singlePageWorkBox">
            <img
              src={buildingImage}
              alt="制作事例2"
              className="singlePageWorkBoxImage"
            />
            <p className="singlePageWorkBoxText">
              ふたつめの制作事例が入ります。
              <br />
              簡単な説明が入ります。
              <br />
              使用ツール：XXX, XXX, XXX
              <br />
              <a href="/" className="singlePageButton -work">
                READ MORE
              </a>
            </p>
          </div>
          <div className="singlePageWorkBox">
            <img
              src={lakeImage}
              alt="制作事例3"
              className="singlePageWorkBoxImage"
            />
            <p className="singlePageWorkBoxText">
              みっつめの制作事例が入ります。
              <br />
              簡単な説明が入ります。
              <br />
              使用ツール：XXX, XXX, XXX
              <br />
              <a href="/" className="singlePageButton -work">
                READ MORE
              </a>
            </p>
          </div>
          <div className="singlePageWorkBox">
            <img
              src={skyImage}
              alt="制作事例4"
              className="singlePageWorkBoxImage"
            />
            <p className="singlePageWorkBoxText">
              よっつめの制作事例が入ります。
              <br />
              簡単な説明が入ります。
              <br />
              使用ツール：XXX, XXX, XXX
              <br />
              <a href="/" className="singlePageButton -work">
                READ MORE
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="singlePageSkills">
        <h2 className="singlePageHeading">MY SKILLS</h2>
        <div className="singlePageSkillsWrapper">
          <div className="singlePageSkillBox">
            <FaLightbulb />
            <div className="singlePageSkillBoxTitle">IDEA</div>
            <p className="singlePageSkillBoxText">
              何かを考えることが好きです。
              <br />
              新しいことを思いついては試しています。
              <br />
              ディレクションの経験もあります。
            </p>
          </div>
          <div className="singlePageSkillBox">
            <FaPaintBrush />
            <div className="singlePageSkillBoxTitle">DESIGN</div>
            <p className="singlePageSkillBoxText">
              見た目の綺麗さだけじゃなくて、
              <br />
              使いやすさ、情報の伝わりやすさなど、
              <br />
              その先まで考えることを意識しています。
            </p>
          </div>
          <div className="singlePageSkillBox">
            <FaCode />
            <div className="singlePageSkillBoxTitle">CODING</div>
            <p className="singlePageSkillBoxText">
              HTML/CSSコーディングも行います。
              <br />
              正しく美しいマークアップと、
              <br />
              今後の変更への強さを考慮しています。
            </p>
          </div>
        </div>
      </div>
      <div className="singlePageContact"></div>
      <footer className="singlePageFooter">&copy; sample site</footer>
    </div>
  );
};
