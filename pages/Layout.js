import React from "react";
import Header from "@/comps/Header";
import Footer from "@/comps/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
