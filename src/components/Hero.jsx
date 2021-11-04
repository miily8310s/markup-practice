import mainphoto from "../assets/home-mainphoto.jpg";
import homelogo from "../assets/home-logo.svg";

export const Hero = () => {
  return (
    <div className="page-hero">
      <div className="hero-container">
        <div className="hero-container-image">
          <img src={mainphoto} alt="" />
        </div>
        <div className="hero-container-logo">
          <img src={homelogo} alt="" />
        </div>
      </div>
    </div>
  );
};
