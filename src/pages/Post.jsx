import { Header } from "../components/Header";
import { BreadcrumbTrail } from "../components/BreadcrumbTrail";
import { MainContainer } from "../components/MainContainer";
import { BottomContainer } from "../components/BottomContainer";
import { Footer } from "../components/Footer";

export const Post = () => {
  return (
    <div className="post">
      <Header />
      <BreadcrumbTrail />
      <MainContainer />
      <BottomContainer />
      <Footer />
    </div>
  );
};
