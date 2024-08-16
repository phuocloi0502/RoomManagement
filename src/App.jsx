import { useState } from "react";
import "./App.scss";
import { Header } from "./components/header/Header";
import { Navigate } from "./components/navigate/Navigate";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="web-container">
      <div className="left-sidebar-wrap">
        <Navigate />
      </div>
      <div className="content-wrap">
        <div className="header-area">
          <Header />
        </div>
        <div className="main-content-wrap">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
