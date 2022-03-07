import React from "react";
import { SideNav, VideoList } from "../organisms/index";

import styled from "styled-components";

const Main = ({ searchVideo, hotVideo }) => {
  return (
    <MainWrap>
      <SideNav />
      <VideoList searchVideo={searchVideo} hotVideo={hotVideo} />
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
