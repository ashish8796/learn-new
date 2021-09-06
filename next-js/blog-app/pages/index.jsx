import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import posts from "./../src/utils/post.json";
import Button from "../src/Components/Button/Button";

function Page() {
  let [postData, setPostData] = useState(0);
  const btnRef = useRef();

  const handleCLick = (e) => {
    if (btnRef.current) {
      btnRef.current.style.color = "grey";
    }

    btnRef.current = e.target;
    btnRef.current.style.color = "red";

    const data = +e.target.innerText.split(" ")[1];

    setPostData(data);
  };

  const handleClickLogo = () => {
    if (btnRef.current) {
      btnRef.current.style.color = "grey";
    }

    setPostData(0);
  };

  return (
    <Main>
      <Nav>
        <LogoBox onClick={handleClickLogo}>
          <img
            src="https://www.meehso.com/wp-content/uploads/2021/07/cropped-New-Project.png"
            alt="meesho logo"
          />
        </LogoBox>

        <LinkBox>
          <Button label="Post 1" handleCLick={handleCLick} />
          <Button label="Post 2" handleCLick={handleCLick} />
          <Button label="Post 3" handleCLick={handleCLick} />
        </LinkBox>
      </Nav>

      {postData > 0 && <p>{posts[postData - 1].post}</p>}
    </Main>
  );
}

const Main = styled.main`
  width: 600px;
  margin: 2rem auto 0;
  border-radius: 6px;
  padding: 30px;
  box-shadow: 2px 3px 10px 0px grey;
  height: 60vh;
`;

const Nav = styled.nav`
  display: flex; 
  padding: 20px;
  width: 500px;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  margin: 0 2rem;
  width: 100px;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const LinkBox = styled.div`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #303030;

    &:hover {
      color: black;
    }
  }
`;

export default Page;
