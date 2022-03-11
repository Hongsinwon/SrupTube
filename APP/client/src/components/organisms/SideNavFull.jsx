import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faPaperPlane,
  faStar,
  faFolder,
  faIndent,
  faCirclePlay,
  faClock,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import styled, { keyframes } from "styled-components";

//handleDrop - drop on/off / state => fales
const SideNavFull = ({ handleDrop, state }) => {
  const [dropSet, setDropSet] = useState(state);

  const navigate = useNavigate();

  //모달창 on/off
  const clickDrop = () => {
    setDropSet(!dropSet);
    handleDrop(dropSet);
  };

  //메인화면 이동 / 리렌더링
  const clickReload = () => {
    navigate("/");
    clickDrop();
  };

  return (
    <>
      <Backdrop onClick={clickDrop} />
      <SideNavFullWrap className={dropSet && "slide"}>
        <SideNavFullHearder>
          <button onClick={clickDrop}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <img
            src={require("../../img/logo.png")}
            alt="Seup tube 로고"
            onClick={clickReload}
          />
        </SideNavFullHearder>
        <SideNavFullList>
          <ul>
            <li onClick={clickReload}>
              <FontAwesomeIcon icon={faHouse} />
              <p>홈</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPaperPlane} />
              <p>탐색</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} />
              <p>구독</p>
            </li>
          </ul>

          <ul>
            <li>
              <FontAwesomeIcon icon={faFolder} />
              <p>보관함</p>
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
              <FontAwesomeIcon icon={faClock} />
              <p>나중에 볼 영상</p>
            </li>
          </ul>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGear} />
              <p>설정</p>
            </li>
          </ul>
        </SideNavFullList>
      </SideNavFullWrap>
    </>
  );
};

const slideSideNavFull = keyframes`
  from {
    left: -240px;
  } 
  to {
    left: -0px;
  }
`;

const SideNavFullWrap = styled.div`
  position: fixed;
  width: 240px;
  left: 0;
  height: 100vh;
  background: #fff;
  border-right: 1px solid #eee;
  z-index: 1;
  box-sizing: border-box;
  animation: ${slideSideNavFull} 0.5s;
`;

const SideNavFullHearder = styled.div`
  display: flex;
  height: 55px;
  padding-left: 16px;
  img {
    cursor: pointer;
  }
`;
const SideNavFullList = styled.div`
  margin-top: 16px;

  ul {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    li {
      display: flex;
      padding-left: 16px;
      width: 100%;
      height: 55px;
      line-height: 55px;
      box-sizing: border-box;
      cursor: pointer;

      svg {
        padding: 17.5px;
        font-size: 20px;
        color: #555;
      }

      &:hover {
        background: #eee;
      }
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0%;
  bottom: 0;
  left: 0%;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
`;

export default SideNavFull;
