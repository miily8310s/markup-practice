import latestPhoto1 from "../assets/latest-photo1.jpg";
import latestPhoto2 from "../assets/latest-photo2.jpg";
import latestPhoto3 from "../assets/latest-photo3.jpg";
import latestPhoto4 from "../assets/latest-photo4.jpg";
import latestPhoto5 from "../assets/latest-photo5.jpg";
import latestPhoto6 from "../assets/latest-photo6.jpg";
import popularPhoto1 from "../assets/popular-photo1.jpg";
import popularPhoto2 from "../assets/popular-photo2.jpg";
import popularPhoto3 from "../assets/popular-photo3.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

export const HomeMainContainer = () => {
  return (
    <div className="page-main">
      <div className="main-container">
        <div className="home-lead">
          <p>
            行ったことのないまちを歩いたり、知らなかった技術を学んだり、たべたことのないものみつけたり。好奇心いっぱいの探索を。
          </p>
        </div>
        <h2>Latest</h2>
        <div className="home-latest">
          <div className="home-latest-item">
            <div className="home-latest-image">
              <a href="/">
                <img src={latestPhoto1} alt="" />
              </a>
            </div>
            <div className="home-latest-text">
              <h3>
                <a href="/">
                  知らない街の「地元」の空気に触れたい！ファーマーズマーケットには情報がいっぱい
                </a>
              </h3>
              <div className="home-tag">
                <span>
                  <a href="/">歩く</a>
                </span>
                <span>
                  <a href="/">食べる</a>
                </span>
              </div>
              <div className="home-info">
                <span>
                  <FaMapMarkerAlt />
                  サンフランシスコ／US
                </span>
              </div>
            </div>
          </div>
          <div className="home-latest-item">
            <div className="home-latest-image">
              <a href="/">
                <img src={latestPhoto2} alt="" />
              </a>
            </div>
            <div className="home-latest-text">
              <h3>
                <a href="/">
                  伝統柄からモダンデザインまでそろった植木鉢専門の工房で絵付けを体験
                </a>
              </h3>
              <div className="home-tag">
                <span>
                  <a href="/">体験する</a>
                </span>
              </div>
              <div className="home-info">
                <span>
                  <FaMapMarkerAlt />
                  鎌倉／Japan
                </span>
              </div>
            </div>
          </div>
          <div className="home-latest-item">
            <div className="home-latest-image">
              <a href="/">
                <img src={latestPhoto3} alt="" />
              </a>
            </div>
            <div className="home-latest-text">
              <h3>
                <a href="/">
                  どこを切り取っても面白い。カラフルな家が立ち並ぶ水の都で色の観察散歩
                </a>
              </h3>
              <div className="home-tag">
                <span>
                  <a href="/">歩く</a>
                </span>
              </div>
              <div className="home-info">
                <span>
                  <FaMapMarkerAlt />
                  ベネチア／Italy
                </span>
              </div>
            </div>
          </div>
          <div className="home-latest-item">
            <div className="home-latest-image">
              <a href="/">
                <img src={latestPhoto4} alt="" />
              </a>
            </div>
            <div className="home-latest-text">
              <h3>
                <a href="/">
                  ふわっとした穴の空いていないドーナッツ食べくらべ。ロンドンの一番人気は？
                </a>
              </h3>
              <div className="home-tag">
                <span>
                  <a href="/">食べる</a>
                </span>
                <span>
                  <a href="/">歩く</a>
                </span>
              </div>
              <div className="home-info">
                <span>
                  <FaMapMarkerAlt />
                  ロンドン／UK
                </span>
              </div>
            </div>
          </div>
          <div className="home-latest-item">
            <div className="home-latest-image">
              <a href="/">
                <img src={latestPhoto5} alt="" />
              </a>
            </div>
            <div className="home-latest-text">
              <h3>
                <a href="/">
                  絵本に出てくるようなどこまでも続く道。走って行った先にあったものは……？
                </a>
              </h3>
              <div className="home-tag">
                <span>
                  <a href="/">体験する</a>
                </span>
                <span>
                  <a href="/">歩く</a>
                </span>
              </div>
              <div className="home-info">
                <span>
                  <FaMapMarkerAlt />
                  ロトルア／New Zealand
                </span>
              </div>
            </div>
          </div>
          <div className="home-latest-item">
            <div className="home-latest-image">
              <a href="/">
                <img src={latestPhoto6} alt="" />
              </a>
            </div>
            <div className="home-latest-text">
              <h3>
                <a href="/">
                  日本の縁日みたい！カーニバルの出店にはその土地のカルチャーが詰まっている
                </a>
              </h3>
              <div className="home-tag">
                <span>
                  <a href="/">食べる</a>
                </span>
                <span>
                  <a href="/">歩く</a>
                </span>
              </div>
              <div className="home-info">
                <span>
                  <FaMapMarkerAlt />
                  デュッセルドルフ／Germany
                </span>
              </div>
            </div>
          </div>
        </div>
        <h2>Popular</h2>
        <div className="home-popular">
          <div className="home-popular-item">
            <div className="home-popular-photo">
              <a href="/">
                <img src={popularPhoto1} alt="" />
              </a>
            </div>
            <div className="home-popular-text">
              <h3>
                <a href="/">
                  カフェめぐり3年間、まじめなコーヒーと素朴なスイーツに行き着いた
                </a>
              </h3>
              <p>
                ほどよい苦味が心地よいコーヒーと、卵の味が濃いドーナッツ。素朴で実直な味で繰り返し立ち寄りたくなるこのお店は、カフェ巡りが趣味だった店主の哲学から生まれました。
              </p>
              <div className="home-info">
                <span>東京／Japan</span>
              </div>
            </div>
          </div>
          <div className="home-popular-item">
            <div className="home-popular-photo">
              <a href="/">
                <img src={popularPhoto2} alt="" />
              </a>
            </div>
            <div className="home-popular-text">
              <h3>
                <a href="/">
                  ドイツの大定番プレッツェル、作ってわかった独特の形の秘密
                </a>
              </h3>
              <p>
                日本では見たことしかなかったプレッツェルでしたが、本場ドイツで食べてすっかりファンに。地元のベーカリーでプレッツェル作りを体験して、地元おすすめの食べ方を教えてもらいました。
              </p>
              <div className="home-info">
                <span>バイエルン／Germany</span>
              </div>
            </div>
          </div>
          <div className="home-popular-item">
            <div className="home-popular-photo">
              <a href="/">
                <img src={popularPhoto3} alt="" />
              </a>
            </div>
            <div className="home-popular-text">
              <h3>
                <a href="/">あの名作が生まれた絵本作家のアトリエを訪ねて</a>
              </h3>
              <p>
                子どもの頃から大好きだった絵本「ぞうとくじら」の作者海川やまさん訪ねました。海の見える小高い丘の上にあるアトリエで生まれたたくさんの絵本に共通する視点とは……。
              </p>
              <div className="home-info">
                <span>尾道／Japan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
