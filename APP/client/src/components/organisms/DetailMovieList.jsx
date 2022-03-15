import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailMovieList = ({ hotVideo }) => {
  const onClickScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <List>
        {hotVideo.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <Item onClick={onClickScroll}>
              <img
                src={item.snippet.thumbnails.medium.url}
                alt="썸네일"
                className="thumbnail"
              />
              <ItemGuide>
                <h3>{item.snippet.title}</h3>
                <p>
                  {item.snippet.channelTitle} |{" "}
                  {item.snippet.publishedAt.substring(0, 10)}
                </p>
              </ItemGuide>
            </Item>
          </Link>
        ))}
      </List>
    </div>
  );
};

const List = styled.ul``;
const Item = styled.li`
  margin-bottom: 24px;
  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 1200px) {
    display: flex;
    img {
      width: 300px;
      margin-right: 16px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 200px;
      margin-right: 16px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 160px;
      margin-right: 16px;
    }
  }
`;
const ItemGuide = styled.div`
  margin-top: 4px;
  line-height: 1.6;
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
  p {
    color: #555;
  }
`;

export default DetailMovieList;
