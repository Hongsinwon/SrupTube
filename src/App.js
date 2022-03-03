import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/pages/index";
import { TopNav } from "./components/organisms/index";
import "./App.css";

function App() {
  const [searchVideo, setSearchVideo] = useState([]); //검색리스트

  return (
    <BrowserRouter>
      <TopNav setVideo={(e) => setSearchVideo(e)} />
      <Routes>
        <Route path="/" element={<Main searchVideo={searchVideo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
