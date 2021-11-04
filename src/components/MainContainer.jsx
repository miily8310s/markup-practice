import headerimage from "../assets/post-headerimage.jpg";
import photo2 from "../assets/post-photo2.jpg";
import speaker1 from "../assets/speaker1.jpg";
import speaker2 from "../assets/speaker2.jpg";
import writer from "../assets/writer.jpg";
import { FaPenNib, FaMapMarkerAlt, FaClock, FaPenFancy } from "react-icons/fa";

export const MainContainer = () => {
  return (
    <div className="page-main">
      <div className="main-container">
        <header className="post-header">
          <h1>
            知らない街の「地元」の空気に触れたい！ファーマーズマーケットには情報がいっぱい
          </h1>
          <div className="post-header-tag">
            <span>
              <a href="/">歩く</a>
            </span>
            <span>
              <a href="/">食べる</a>
            </span>
          </div>
          <div className="post-header-info">
            <span>
              <FaPenNib />
              桑山みなと
            </span>
            <span>
              <FaMapMarkerAlt />
              サンフランシスコ
            </span>
            <span>
              <FaClock />
              2020.6.16
            </span>
          </div>
          <figure className="post-header-photo-caption">
            <img src={headerimage} alt="" />
            <figcaption>
              グリルとフレッシュ、野菜の味の深みが変わってどちらも楽しめた
            </figcaption>
          </figure>
        </header>
        <div className="post-contents">
          <h2>ファーマーズマーケットで見つけた「地元」の味</h2>
          <p>
            　サンフランシスコは、レトロなケーブルカーや真っ赤なゴールデンゲートブリッジなど、青い空に似合う観光スポットがたくさんある。それらを思い切り楽しむのももちろんいいけれど、もっと普通の「地元」っぽい空気を感じてみたかったので、ファーマーズマーケットに行ってみた。
          </p>
          <p>
            　まず目に入るのはカラフルな野菜や果物。日本では見慣れない葉物や、日本のものと似ているけれどちょっと違う趣の根菜類などを見つけては、どんな風に食べるのかを聞いてみる。「このまま食べればいいんだよ」と味見をさせてくれたり、簡単なレシピを教えてくれたり、マーケットに立つ店主たちはとても気さくだ。買った果物をその場でカットしてもらって食べているお客さんもいる。
            <br />
            　どんどん目移りしてついたくさん買いたくなってしまうのだけれど、旅行で訪れているときは調理する場所も時間もない。でもどうしても何か欲しくて、オレンジを1個だけ買った。
          </p>
          <p>
            　食材を買えないのは残念だが、マーケットにはフードスタンドがいくつもある。網のうえでほどよく焼かれた牡蠣がガーリックのきいたいい香りを漂わせている。サンフランシスコというとカニのイメージを持っていたのだけれど、実は牡蠣も有名なのだ。1個から購入できるのでとりあえず食べてみると、裏切らないおいしさでワインが欲しくなった。
            <br />
            　次に目に入ったのは、オーガニック野菜をふんだんに使ったオープンサンドだ。たくさんの野菜を並べた農家のテントで販売されている。店主のご夫婦に聞くと、ここベイエリアは健康志向でオーガニック食材を求める人が多いという。普段スーパーで買う野菜の味とどれほど違うのか知りたくて、さっそくオーダーした。バケットの上にフレッシュな野菜のみじん切りがたっぷり敷き詰められている。味付けはオリーブオイルとバルサミコビネガーでシンプルに。そこに軽くグリルした野菜串とバジルがのせられ完成だ。実にシンプルなのだけれど、食べてみると、野菜の味がとても濃くて驚いた。
          </p>
          <p>
            　今回、旅行で<mark>ファーマーズマーケットを楽しむコツを3つ</mark>
            覚えたので、次は別の土地でもそのエリアの「市」を見つけて楽しむことにしよう。
          </p>
          <ul className="post-contents-list">
            <li>お店の人になんでも質問をする</li>
            <li>調理販売しているフードスタンドは要チェック</li>
            <li>
              たくさん購入したくなるけれど、食べきれる量の果物や、お土産にできるジャムなどの加工品を選ぶ
            </li>
          </ul>
          <div className="post-contents-info-box">
            <p>
              <strong>Green Farmers Market</strong>
              <br />
              毎週水曜日 9:00〜13:00
              <br />
              毎月第1日曜日 9:00〜15:00（フードスタンドは日曜日の出店が多い）
              <br />
            </p>
          </div>
          <h2>帰り道に見つけたカフェで出会った「地元」の情報</h2>
          <div className="post-contents-float-box">
            <img src={photo2} alt="" className="post-contents-float-right" />
            <p>
              　ファーマーズマーケットから市の中心街に移動する道でカフェを見つけた。歩き回ってちょっと疲れたしコーヒーでも飲んで休憩することにしよう。
            </p>
            <p>
              　店内にはけっこうお客さんがいた。ひとりで本を読んでいる若い男性、しずかにおしゃべりしている男女、常連らしいおじいちゃんは窓際で新聞を読んでいる。それぞれ自分の好きな時間を過ごしているという空気で居心地がいい。近くの席でパソコンを開いている女性と、なんとなく会話が始まった。彼女は教育関係の仕事をしていて、教材のアイディアを考えているところだった。
            </p>
          </div>
          <div className="post-contents-chat">
            <div className="post-contents-chat-1st">
              <div className="post-contents-chat-face">
                <img src={speaker1} alt="" />
              </div>
              <div className="post-contents-chat-talk">
                <p>学校で仕事をしているんですか？</p>
              </div>
            </div>
            <div className="post-contents-chat-2st">
              <div className="post-contents-chat-face">
                <img src={speaker2} alt="" />
              </div>
              <div className="post-contents-chat-talk">
                <p>学校で仕事をしているんですか？</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="post-footer">
          <h2>
            <FaPenFancy /> Profile
          </h2>
          <div className="post-footer-profile">
            <div className="post-footer-profile-photo">
              <img src={writer} alt="" />
            </div>
            <div className="post-footer-profile-text">
              <p>
                <strong>桑山みなと</strong>
                <br />
                大手出版社の編集者を経てライターとして独立。絵本、児童文学に詳しく、小学校の教員免許を持っているため、絵本作家や教育関係者へのインタビュー経験が多い。現在シアトルに長期滞在中で、Tansaku!では「アメリカ西海岸レポート」を連載している。
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
