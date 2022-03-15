import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { DetailVideo, DetailMovieList } from "../organisms/index";
import { Hotitem, SearchItem } from "../items/index";

const Dtail = ({ searchVideo, hotVideo }) => {
  const { id } = useParams();
  // id 값 같은 값 가져오기
  const targetHotVideo = hotVideo.find((element) => element.id === id);
  const targetSearchVideo = searchVideo.find(
    (element) => element.id.videoId === id
  );

  //상단으로 이동하기
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <MainWrap>
      <div className="mainContent">
        <DetailVideo targetId={id} />

        {targetHotVideo !== undefined && (
          <Hotitem targetHotVideo={targetHotVideo} />
        )}

        {targetSearchVideo !== undefined && (
          <SearchItem targetSearchVideo={targetSearchVideo} />
        )}
      </div>

      <DetailMovieList hotVideo={hotVideo} />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 4fr 1fr;
  padding: 80px 20px 0;
  height: 100vh;
  max-width: 100vw;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);

    .mainContent {
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
  }
`;

export default Dtail;
