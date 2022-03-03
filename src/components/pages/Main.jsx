import React from "react";
import { SideNav, VideoList, DetailMovieList } from "../organisms/index";

import styled from "styled-components";

const Main = ({ searchVideo }) => {
  return (
    <MainWrap>
      <SideNav />
      <DetailMovieList />
      <VideoList searchVideo={searchVideo} />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: flex;
  padding-top: 50px;
  height: 100vh;
  max-width: 100vw;
  width: 100%;
`;

export default Main;
