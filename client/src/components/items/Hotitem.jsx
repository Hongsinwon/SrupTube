import React from "react";
import styled from "styled-components";

const Hotitem = ({ targetHotVideo }) => {
  return (
    <VideoContent>
      <h2 className="title">{targetHotVideo.snippet.title}</h2>
      <p className="chnalInfo">
        {targetHotVideo.snippet.channelTitle} |{" "}
        {targetHotVideo.snippet.publishedAt.substring(0, 10)}
      </p>
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
