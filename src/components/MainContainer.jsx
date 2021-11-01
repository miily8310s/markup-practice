import headerimage from "../assets/post-headerimage.jpg";

export const MainContainer = () => {
  return (
    <div class="page-main">
      <div class="main-container">
        <header className="post-header">
          <h1>
            知らない街の「地元」の空気に触れたい！ファーマーズマーケットには情報がいっぱい
          </h1>
          <figure class="post-header-photo-caption">
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
          <ul class="post-contents-list">
            <li>お店の人になんでも質問をする</li>
            <li>調理販売しているフードスタンドは要チェック</li>
            <li>
              たくさん購入したくなるけれど、食べきれる量の果物や、お土産にできるジャムなどの加工品を選ぶ
            </li>
          </ul>
        </div>
        <div className="post-footer">
          <p>
            <strong>ポストフッター</strong>
          </p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          aspernatur fuga iusto debitis eaque eius provident libero suscipit
          quam! Suscipit amet dignissimos id soluta quae, veniam fuga
          consequuntur placeat magni!
        </div>
      </div>
    </div>
  );
};
