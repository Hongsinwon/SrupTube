import React from "react";
import styled from "styled-components";

const VideoList = () => {
  return (
    <VideoListWrap>
      <List>
        <Item>
          <img
            src="https://i.ytimg.com/vi/PEKkdIT8JPM/mqdefault.jpg"
            alt="썸네일"
            className="thumbnail"
          />
          <ItemGuide>
            <div className="leftGuide">
              <img
                src="https://yt3.ggpht.com/kkOMpebHJShXj7zcxUcAbVCCLI1o85KEIWczye0oF9u8NoQWv3eQeknVTPAGKvb9-D72PmryPjc=s240-c-k-c0x00ffffff-no-nd-rj"
                alt=""
              />
            </div>
            <div className="rightGuide">
              <h3>제목입니다.</h3>
              <p>닉네임</p>
              <p>조회수 123회 19시간 전</p>
            </div>
          </ItemGuide>
        </Item>
        <Item>
          <img
            src="https://i.ytimg.com/vi/PEKkdIT8JPM/mqdefault.jpg"
            alt="썸네일"
            className="thumbnail"
          />
          <ItemGuide>
            <div className="leftGuide">
              <img
                src="https://yt3.ggpht.com/kkOMpebHJShXj7zcxUcAbVCCLI1o85KEIWczye0oF9u8NoQWv3eQeknVTPAGKvb9-D72PmryPjc=s240-c-k-c0x00ffffff-no-nd-rj"
                alt=""
              />
            </div>
            <div className="rightGuide">
              <h3>제목입니다.</h3>
              <p>닉네임</p>
              <p>조회수 123회 19시간 전</p>
            </div>
          </ItemGuide>
        </Item>
        <Item>
          <img
            src="https://i.ytimg.com/vi/PEKkdIT8JPM/mqdefault.jpg"
            alt="썸네일"
            className="thumbnail"
          />
          <ItemGuide>
            <div className="leftGuide">
              <img
                src="https://yt3.ggpht.com/kkOMpebHJShXj7zcxUcAbVCCLI1o85KEIWczye0oF9u8NoQWv3eQeknVTPAGKvb9-D72PmryPjc=s240-c-k-c0x00ffffff-no-nd-rj"
                alt=""
              />
            </div>
            <div className="rightGuide">
              <h3>제목입니다.</h3>
              <p>닉네임</p>
              <p>조회수 123회 19시간 전</p>
            </div>
          </ItemGuide>
        </Item>
        <Item>
          <img
            src="https://i.ytimg.com/vi/PEKkdIT8JPM/mqdefault.jpg"
            alt="썸네일"
            className="thumbnail"
          />
          <ItemGuide>
            <div className="leftGuide">
              <img
                src="https://yt3.ggpht.com/kkOMpebHJShXj7zcxUcAbVCCLI1o85KEIWczye0oF9u8NoQWv3eQeknVTPAGKvb9-D72PmryPjc=s240-c-k-c0x00ffffff-no-nd-rj"
                alt=""
              />
            </div>
            <div className="rightGuide">
              <h3>제목입니다.</h3>
              <p>닉네임</p>
              <p>조회수 123회 19시간 전</p>
            </div>
          </ItemGuide>
        </Item>
        <Item>
          <img
            src="https://i.ytimg.com/vi/PEKkdIT8JPM/mqdefault.jpg"
            alt="썸네일"
            className="thumbnail"
          />
          <ItemGuide>
            <div className="leftGuide">
              <img
                src="https://yt3.ggpht.com/kkOMpebHJShXj7zcxUcAbVCCLI1o85KEIWczye0oF9u8NoQWv3eQeknVTPAGKvb9-D72PmryPjc=s240-c-k-c0x00ffffff-no-nd-rj"
                alt="썸네일"
              />
            </div>
            <div className="rightGuide">
              <h3>제목입니다.</h3>
              <p className="nickName"> 닉네임</p>
              <p>조회수 123회 19시간 전</p>
            </div>
          </ItemGuide>
        </Item>
      </List>
    </VideoListWrap>
  );
};

const VideoListWrap = styled.div`
  padding-top: 20px;
  padding-left: 100px;
  width: 100%;
`;
const List = styled.ul`
  max-width: 93vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  -webkit-column-gap: 20px;
  column-gap: 20px;
  grid-row-gap: 20px;
  row-gap: 20px;
  margin-right: 30px;
`;
const Item = styled.li`
  .thumbnail {
    width: 100%;
    border-radius: 10px;
  }
`;
const ItemGuide = styled.div`
  padding: 10px;
  display: flex;

  .leftGuide {
    img {
      width: 36px;
      border-radius: 50%;
    }
  }
  .rightGuide {
    margin-left: 16px;
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
