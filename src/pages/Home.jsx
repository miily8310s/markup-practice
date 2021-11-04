import React from "react";
import { Header } from "../components/Header";
import { BottomContainer } from "../components/BottomContainer";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HomeMainContainer } from "../components/HomeMainContainer";
import { News } from "../components/News";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <HomeMainContainer />
      <News />
      <BottomContainer />
      <Footer />
    </div>
  );
};
