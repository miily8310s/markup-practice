import { FaArrowAltCircleRight } from "react-icons/fa";

export const News = () => {
  return (
    <div className="page-news">
      <div className="news-container">
        <h2>News</h2>
        <div className="home-news">
          <dl>
            <dt>2021.3.25</dt>
            <dd>
              4月15日にトークイベント「ドイツビールの魅力再発見」（ドイツビールとおつまみ付き）を開催します。
              <a href="/">
                ［<FaArrowAltCircleRight /> 全文を読む］
              </a>
            </dd>
          </dl>
          <dl>
            <dt>2021.2.15</dt>
            <dd>
              Tansaku!
              のオープン10周年を記念して、プレゼントキャンペーンを実施します。
              <a href="/">
                ［<FaArrowAltCircleRight /> 全文を読む］
              </a>
            </dd>
          </dl>
          <dl>
            <dt>2021.1.30</dt>
            <dd>
              Tansaku!
              のウェブサイトをリニューアルしました。新連載が2本スタートします。
              <a href="/">
                ［<FaArrowAltCircleRight /> 全文を読む］
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};
