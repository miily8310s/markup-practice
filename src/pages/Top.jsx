import React from "react";
import { Header } from "../components/Header";
import { BottomContainer } from "../components/BottomContainer";
import { Footer } from "../components/Footer";

export const Top = () => {
  return (
    <div className="top">
      <Header />
      <BottomContainer />
      <Footer />
    </div>
  );
};
