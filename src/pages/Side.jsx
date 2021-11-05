import { Header } from "../components/Header";
import { SideMainContainer } from "../components/SideMainContainer";
import { SidebarContainer } from "../components/SidebarContainer";
import { Footer } from "../components/Footer";

export const Side = () => {
  return (
    <div className="sidebar-post">
      <Header />
      <div className="page-main">
        <div className="main-container">
          <div className="columns">
            <SideMainContainer />
            <SidebarContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
