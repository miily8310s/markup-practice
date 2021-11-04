import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaChevronUp,
} from "react-icons/fa";

export const BottomContainer = () => {
  return (
    <div className="page-bottom">
      <div className="bottom-container">
        <div className="bottom-container-banner">
          <div>
            <a href="/">
              <img src={banner1} alt="" />
            </a>
          </div>
          <div>
            <a href="/">
              <img src={banner2} alt="" />
            </a>
          </div>
        </div>
        <h2 className="followUs">Follow Us!</h2>
        <div className="sns">
          <div>
            <a href="/">
              <FaTwitter />
            </a>
          </div>
          <div>
            <a href="/">
              <FaFacebookF />
            </a>
          </div>
          <div>
            <a href="/">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="goTop">
          <a href="#top">
            <FaChevronUp />
          </a>
        </div>
      </div>
    </div>
  );
};
