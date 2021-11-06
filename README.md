# 本リポジトリについて

[教科書では教えてくれない HTML&CSS](https://direct.gihyo.jp/view/item/000000001556)を React 及び SCSS で書き直したものになります

## 使用している技術/ライブラリ

- React(JSX 形式)

  - React Router
  - React Icons

- normalize.css
- SCSS

## CSS 学習メモ

### display について

参考サイト

https://developer.mozilla.org/en-US/docs/Web/CSS/display
https://css-tricks.com/almanac/properties/d/display/
https://saruwakakun.com/html-css/basic/display
https://taneppa.net/display-inline-block/

### align-items と justify-content の違い

- align-items
  - Flexbox では**交差軸**方向のアイテムの配置を制御
    - ex)flex-direction が row または row-reverse であるとき列方向の軸
  - Grid では**縦**方向のアイテムの配置を制御
- justify-content
  - Flexbox では**主軸**方向のアイテムの配置を制御
    - ex)flex-direction が row または row-reverse であるとき行方向の軸

参考サイト

https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content

### スタイルの継承について

CSS プロパティには、親要素に指定した値が子要素に継承されるものと継承されないものがある

- 継承されるプロパティ
  ```
  line-height
  letter-spacing
  font-family
  font-weight
  color
  text-align
  ```
- 継承されないプロパティ
  ```
  padding
  margin
  height
  width
  border
  background
  z-index
  ```
