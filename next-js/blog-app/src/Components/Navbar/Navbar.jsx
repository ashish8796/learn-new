import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Navbar() {
  return (
    <Nav>
      <LogoBox>Logo</LogoBox>

      <LinkBox>
        <Link href={"/posts/[id]"} as={`/posts/1`}>
          Post 1
        </Link>

        <Link href={"/posts/[id]"} as={`/posts/2`}>
          Post 2
        </Link>

        <Link href={"/posts/[id]"} as={`/posts/3`}>
          Post 3
        </Link>
      </LinkBox>
    </Nav>
  );
}

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
