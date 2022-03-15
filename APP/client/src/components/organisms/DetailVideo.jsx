import React from "react";
import styled from "styled-components";

const DetailVideo = ({ targetId }) => {
  const videoSrc = `http://www.youtube.com/embed/${targetId}`;

  return (
    <DetailVideoWrap>
      <iframe
        frameBorder="0"
        height="100%"
        width="100%"
        title="Video Player"
        src={videoSrc}
      />
    </DetailVideoWrap>
  );
};

const DetailVideoWrap = styled.div`
  height: 700px;

  @media (max-width: 1200px) {
    height: 600px;
  }

  @media (max-width: 800px) {
    height: 500px;
  }

  @media (max-width: 600px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

export default DetailVideo;
