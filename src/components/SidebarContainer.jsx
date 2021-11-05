import latestPhoto3 from "../assets/latest-photo3.jpg";
import bookCafe from "../assets/book-cafe.png";
import latestPhoto1Sq from "../assets/latest-photo1-square.jpg";
import latestPhoto2Sq from "../assets/latest-photo2-square.jpg";
import latestPhoto3Sq from "../assets/latest-photo3-square.jpg";
import latestPhoto4Sq from "../assets/latest-photo4-square.jpg";
import latestPhoto5Sq from "../assets/latest-photo5-square.jpg";
import latestPhoto6Sq from "../assets/latest-photo6-square.jpg";

export const SidebarContainer = () => {
  return (
    <aside className="columns-side">
      <div className="side-popular">
        <a href="/">
          <h2>Special</h2>
          <img src={latestPhoto3} alt="" />
          <p>
            どこを切り取っても面白い。カラフルな家が立ち並ぶ水の都で色の観察散歩
          </p>
        </a>
      </div>
      <div className="side-latest">
        <h2>Latest</h2>
        <ul>
          <li>
            <div>
              <img src={latestPhoto1Sq} alt="" />
            </div>
            <p>
              <a href="/">
                知らない街の「地元」の空気に触れたい！ファーマーズマーケットには情報がいっぱい
              </a>
            </p>
          </li>
          <li>
            <div>
              <img src={latestPhoto2Sq} alt="" />
            </div>
            <p>
              <a href="/">
                伝統柄からモダンデザインまでそろった植木鉢専門の工房で絵付けを体験
              </a>
            </p>
          </li>
          <li>
            <div>
              <img src={latestPhoto3Sq} alt="" />
            </div>
            <p>
              <a href="/">
                どこを切り取っても面白い。カラフルな家が立ち並ぶ水の都で色の観察散歩
              </a>
            </p>
          </li>
          <li>
            <div>
              <img src={latestPhoto4Sq} alt="" />
            </div>
            <p>
              <a href="/">
                ふわっとした穴の空いていないドーナッツ食べくらべ。ロンドンの一番人気は？
              </a>
            </p>
          </li>
          <li>
            <div>
              <img src={latestPhoto5Sq} alt="" />
            </div>
            <p>
              <a href="/">
                絵本に出てくるようなどこまでも続く道。走って行った先にあったものは……？
              </a>
            </p>
          </li>
          <li>
            <div>
              <img src={latestPhoto6Sq} alt="" />
            </div>
            <p>
              <a href="/">
                日本の縁日みたい！カーニバルの出店にはその土地のカルチャーが詰まっている
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div class="side-book">
        <h2>BOOK</h2>
        <div className="book-info">
          <div className="book-image">
            <img src={bookCafe} alt="" />
          </div>
          <div className="book-text">
            <p>
              <strong>コーヒー好きのカフェめぐり</strong>
            </p>
            <p>
              Tansaku!編集部
              <br /> ¥1,600（税別）
            </p>
          </div>
          <div className="buy">
            <button>購入</button>
          </div>
        </div>
      </div>
    </aside>
  );
};
