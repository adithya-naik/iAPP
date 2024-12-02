import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  // as sidebar me active className change karna and depending upon on that we have to chnage the content we maintain a state in the Parent component which is App.jsx


  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
        ></Sidebar>

        <div className="content">
          <Header></Header>

          {/* here we have to mention this in the outlet */}
          <Outlet />

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
