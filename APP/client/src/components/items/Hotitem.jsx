import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShareFromSquare,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const Hotitem = ({ targetHotVideo }) => {
  return (
    <VideoContent>
      <h2 className="title">{targetHotVideo.snippet.title}</h2>
      <div className="infoList">
        <p className="chnalInfo">
          {targetHotVideo.snippet.channelTitle} |{" "}
          {targetHotVideo.snippet.publishedAt.substring(0, 10)}
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faThumbsUp} />
          </li>
          <li>
            <FontAwesomeIcon icon={faThumbsDown} />
          </li>
          <li>
            <FontAwesomeIcon icon={faShareFromSquare} />
          </li>
          <li>
            <FontAwesomeIcon icon={faEllipsis} />
          </li>
        </ul>
      </div>
      <p className="contnetInfo">{targetHotVideo.snippet.description}</p>
    </VideoContent>
  );
};

const VideoContent = styled.div`
  padding: 0 10px;
  overflow: hidden;
  .title {
    margin: 20px 0 16px;
    font-size: 24px;
    font-weight: bold;
  }

  .infoList {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      li {
        padding: 0 10px;
        font-size: 16px;
        color: #777;
        cursor: pointer;

        &:hover {
          color: red;
        }
      }
    }
  }
  .chnalInfo {
    color: #555;
  }
  .contnetInfo {
    margin-top: 16px;
    font-size: 16px;
    word-break: keep-all;
    word-wrap: break-word;
  }
`;

export default Hotitem;
