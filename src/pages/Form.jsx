export const Form = () => {
  return (
    <div className="apply">
      <div className="campaign">
        <div className="campaign-container">
          <h2 className="apply-title">
            <span>Tansaku! 10th Anniversary</span>
            <br />
            キャンペーン応募フォーム
          </h2>
          <p className="apply-lead">
            Tansaku!
            が10周年を迎えたのを記念して、プレゼントキャンペーンを実施します。ロゴ入りのオリジナルステンレスマグ、Tシャツ、トートバッグをそれぞれ5名様にプレゼント。当選者にはメールでご連絡いたします。
          </p>
        </div>
      </div>
      <div className="present-form">
        <div className="form-container">
          <form className="form" action="">
            <p>
              <label htmlFor="question1">
                お名前<span className="required">必須</span>
              </label>
              <br />
              <input
                type="text"
                name="question1"
                id="question1"
                placeholder="お名前"
                required
              />
            </p>
            <p>
              <label htmlFor="question2">
                メールアドレス<span className="required">必須</span>
              </label>
              <br />
              <input
                type="email"
                name="question2"
                id="question2"
                placeholder="mail@example.com"
                required
              />
            </p>
            <p>
              <label htmlFor="present">
                希望のプレゼント<span className="required">必須</span>
              </label>
              <br />
              <select name="present" id="present">
                <option>プレゼントを選んでください</option>
                <option value="1">ステンレスマグ</option>
                <option value="2">Tシャツ</option>
                <option value="3">トートバッグ</option>
              </select>
            </p>
            <p>
              <label htmlFor="question3">メッセージ</label>
              <br />
              <textarea name="question3" id="question3"></textarea>
            </p>
            <p>
              <label htmlFor="question3">
                <input
                  type="checkbox"
                  name="privacy"
                  id="privacy"
                  value="privacy"
                  required
                />
                プライバシーポリシーに同意する
              </label>
            </p>
            <p className="form-button">
              <input type="submit" value="キャンペーンに応募する" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
