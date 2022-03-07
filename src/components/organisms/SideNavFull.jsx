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
  faClipboardList,
  faFlag,
  faHeadset,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

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
    window.location.reload();
    clickDrop();
  };

  return (
    <div>
      <Backdrop onClick={clickDrop} />
      <SideNavFullWrap>
        <SideNavFullHearder>
          <button onClick={clickDrop}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <img
            src={require("../../img/logo.jpg")}
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
            <li>
              <FontAwesomeIcon icon={faClipboardList} />
              <p>이용약관</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faFlag} />
              <p>신고</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faHeadset} />
              <p>고객센터</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCommentDots} />
              <p>의견 보내기</p>
            </li>
          </ul>
        </SideNavFullList>
      </SideNavFullWrap>
    </div>
  );
};

const SideNavFullWrap = styled.div`
  position: fixed;
  left: 0;
  width: 240px;
  height: 100vh;
  background: #fff;
  border-right: 1px solid #eee;
  z-index: 1;
  box-sizing: border-box;
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
