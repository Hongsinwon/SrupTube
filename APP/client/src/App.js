import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Detail } from "./components/pages/index";
import { TopNav } from "./components/organisms/index";
import "./App.css";

import { getVideoList } from "./apis/video";

function App() {
  const [searchVideo, setSearchVideo] = useState([]); //검색리스트
  const [hotVideo, setHotVideo] = useState([]); //인기리스트

  useEffect(() => {
    getHotVideo();
  }, []);

  const getHotVideo = async () => {
    const result = await getVideoList();
    setHotVideo(result);
  };

  return (
    <BrowserRouter>
      <TopNav setVideo={(e) => setSearchVideo(e)} />
      <Routes>
        <Route
          path="/"
          element={<Main searchVideo={searchVideo} hotVideo={hotVideo} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail searchVideo={searchVideo} hotVideo={hotVideo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 
