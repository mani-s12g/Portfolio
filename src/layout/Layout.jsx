import React from "react";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
