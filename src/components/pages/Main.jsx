import React from "react";
import { SideNav, VideoList } from "../organisms/index";

import styled from "styled-components";

const Main = () => {
  return (
    <MainWrap>
      <SideNav />
      <VideoList />
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
