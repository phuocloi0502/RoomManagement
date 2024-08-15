import { useState } from "react";
import "./App.scss";
import { Header } from "./components/header/Header";
import { Navigate } from "./components/navigate/Navigate";

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
        <div className="main-content-wrap">Nội dung sẽ thay đổi ở đây</div>
      </div>
    </div>
  );
}

export default App;
