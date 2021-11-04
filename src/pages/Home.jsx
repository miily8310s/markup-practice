import React from "react";
import { Header } from "../components/Header";
import { BottomContainer } from "../components/BottomContainer";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <BottomContainer />
      <Footer />
    </div>
  );
};
