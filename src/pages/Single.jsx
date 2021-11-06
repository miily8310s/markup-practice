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
          <a className="singlePageHeaderButton" href="#about">
            LEARN MORE
          </a>
          <a className="singlePageHeaderButton -showy" href="#contact">
            SEND MESSAGE
          </a>
        </div>
      </header>
      <div className="singlePageAbout" id="about">
        <h2 className="singlePageAboutHeading">ABOUT ME</h2>
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
      <div className="singlePageWorks"></div>
      <div className="singlePageSkills"></div>
      <div className="singlePageContact"></div>
      <footer className="singlePageFooter"></footer>
    </div>
  );
};
