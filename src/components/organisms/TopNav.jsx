import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideNavFull } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faVideo,
  faHeart,
  faBell,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import { getVideoSearch } from "../../apis/video";
import styled from "styled-components";

const TopNav = ({ setVideo }) => {
  const [search, setSearch] = useState("");

  const [drop, setDrop] = useState(false);

  const handleDrop = ({ state }) => {
    setDrop(state);
  };

  const SearchBtn = async (e) => {
    if (!search) return;

    e.preventDefault();
    const params = {
      q: search,
    };
    const { items } = await getVideoSearch(params);
    setVideo(items);
  };

  return (
    <Header>
      <NavWrap>
        <NavLogo>
          <button onClick={() => setDrop(!drop)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          {drop && <SideNavFull handleDrop={handleDrop} state={drop} />}
          <Link to="/">
            <img src={require("../../img/logo.jpg")} alt="Seup tube 로고" />
          </Link>
        </NavLogo>
        <NavSearch onSubmit={SearchBtn}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색어를 입력해주세요."
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </NavSearch>
        <NavList>
          <li>
            <FontAwesomeIcon icon={faVideo} />
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleUser} />
          </li>
        </NavList>
      </NavWrap>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  padding: 0 16px;
  width: 100%;
  height: 55px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;
`;
const NavWrap = styled.div`
  display: flex;
  justify-content: space-between; ;
`;
const NavLogo = styled.div`
  display: flex;
  button {
    width: 55px;
    height: 55px;
    line-height: 55px;
    font-size: 24px;
    text-align: center;
    background-color: #fff;
    margin-right: 20px;
  }
  img {
    padding: 16px 0;
    height: 25px;
  }
`;
const NavSearch = styled.form`
  height: 40px;
  padding: 8px 0;
  input {
    width: 300px;
    height: 100%;
    padding: 0 10px;
    border: 1px solid #ddd;
    background: #f9f9f9;

    &:active,
    &:focus {
      outline: none;
      border: 1px solid red;
    }
  }
  button {
    height: 100%;
    width: 50px;
    border: 1px solid red;
    background-color: red;
    svg {
      color: #fff;
    }
  }
`;
const NavList = styled.ul`
  display: flex;

  li {
    width: 55px;
    height: 55px;
    line-height: 55px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    color: #aaa;
    transition: all 0.3s;

    &:hover {
      color: #222;
    }
  }
`;

export default TopNav;
