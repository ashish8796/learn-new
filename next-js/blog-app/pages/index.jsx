import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import posts from "./../src/utils/post.json";
import Button from "../src/Components/Button/Button";

function Page() {
  let [postData, setPostData] = useState(0);

  const handleCLick = (e) => {
    const data = +e.target.innerText.split(" ")[1];
    // console.log(data);

    setPostData(data);
  };

  return (
    <Main>
      <Nav>
        <LogoBox>Logo</LogoBox>

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
  width: 500px;
  margin: 2rem auto 0;
`;

const Nav = styled.nav`
  display: flex;
  padding: 20px;
  width: 500px;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  margin: 0 2rem;
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
