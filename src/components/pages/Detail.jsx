import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Dtail = ({ searchVideo, hotVideo }) => {
  const { id } = useParams();
  // id 값 같은 값 가져오기
  const targetHotVideo = hotVideo.find((element) => element.id === id);
  const targetSearchVideo = searchVideo.find(
    (element) => element.id.videoId === id
  );

  return <MainWrap></MainWrap>;
};

const MainWrap = styled.div`
  display: flex;
  padding-top: 50px;
  height: 100vh;
  max-width: 100vw;
  width: 100%;
`;

export default Dtail;
