import { FaChevronRight } from "react-icons/fa";

export const BreadcrumbTrail = () => {
  return (
    <div className="breadcrumb">
      <div className="bc-container">
        <ul className="bc-container-nav">
          <li>
            <a href="/">HOME</a>
            <FaChevronRight />
          </li>
          <li>
            <a href="/">アメリカ西海岸レポート</a>
            <FaChevronRight />
          </li>
          <li>
            知らない街の「地元」の空気に触れたい！ファーマーズマーケットには情報がいっぱい
          </li>
        </ul>
      </div>
    </div>
  );
};
