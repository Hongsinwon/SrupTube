import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Detail } from "./components/pages/index";
import { TopNav } from "./components/organisms/index";
import "./App.css";

function App() {
  const [hotVideo, setHotVideo] = useState([]); //인기리스트
  const [searchVideo, setSearchVideo] = useState([]); //검색리스트
  console.log(searchVideo);

  return (
    <BrowserRouter>
      <TopNav setVideo={(e) => setSearchVideo(e)} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
