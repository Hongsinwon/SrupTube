import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faStar,
  faIndent,
  faCirclePlay,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const SideNav = () => {
  return (
    <SideNavWrap>
      <SideNavlist>
        <li>
          <FontAwesomeIcon icon={faPaperPlane} />
          <p>탐색</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
          <p>구독</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faIndent} />
          <p>시청기록</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faCirclePlay} />
          <p>내 동영상</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faGear} />
          <p>설정</p>
        </li>
      </SideNavlist>
    </SideNavWrap>
  );
};

const SideNavWrap = styled.div`
  position: fixed;
  top: 54px;
  height: 100%;
  padding-left: 16px;
  width: 55px;
  background: #fff;
  border: 1px solid #eee;
`;
const SideNavlist = styled.ul`
  padding-top: 10px;

  li {
    width: 55px;
    height: 70px;
    text-align: center;
    cursor: pointer;
    color: #555;
    transition: all 0.3s;

    svg {
      margin-top: 14px;
      font-size: 20px;
    }

    p {
      margin-top: 8px;
      font-size: 10px;
    }

    &:hover {
      color: #222;
    }
  }
`;

export default SideNav;
