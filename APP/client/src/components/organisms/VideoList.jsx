import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const VideoList = ({ searchVideo, hotVideo }) => {
  return (
    <VideoListWrap>
      {searchVideo.length === 0 && (
        <List>
          {hotVideo.map(({ id, snippet }) => (
            <Link to={`/detail/${id}`} key={id}>
              <Item>
                <img
                  src={snippet.thumbnails.medium.url}
                  alt="썸네일"
                  className="thumbnail"
                />
                <ItemGuide>
                  <div className="guide">
                    <h3>{snippet.title}</h3>
                    <p>
                      {snippet.channelTitle} |{" "}
                      {snippet.publishedAt.substring(0, 10)}
                    </p>
                  </div>
                </ItemGuide>
              </Item>
            </Link>
          ))}
        </List>
      )}

      <List>
        {searchVideo.map(({ id, snippet }) => (
          <Link to={`/detail/${id.videoId}`} key={id.videoId}>
            <Item>
              <img
                src={snippet.thumbnails.medium.url}
                alt="썸네일"
                className="thumbnail"
              />
              <ItemGuide>
                <div className="guide">
                  <h3>{snippet.title}</h3>
                  <p>
                    {snippet.channelTitle} |{" "}
                    {snippet.publishTime.substring(0, 10)}
                  </p>
                </div>
              </ItemGuide>
            </Item>
          </Link>
        ))}
      </List>
    </VideoListWrap>
  );
};

const VideoListWrap = styled.div`
  padding-top: 20px;
  padding-left: 95px;
  width: 100%;
  @media (max-width: 480px) {
    padding-left: 20px;
  }
`;
const List = styled.ul`
  max-width: 94vw;
  padding-right: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  -webkit-column-gap: 20px;
  column-gap: 20px;
  grid-row-gap: 20px;
  row-gap: 20px;
  margin-right: 30px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Item = styled.li`
  .thumbnail {
    width: 100%;
    border-radius: 10px;
  }
`;
const ItemGuide = styled.div`
  padding-top: 10px;
  display: flex;

  .guide {
    h3 {
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: bold;
    }

    p {
      color: #555;
      line-height: 1.6;
    }
  }
`;

export default VideoList;
