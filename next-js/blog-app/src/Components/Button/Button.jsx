import React from "react";
import styled from "styled-components";

export default function Button({ label, handleCLick }) {
  return <ButtonElem onClick={handleCLick}>{label}</ButtonElem>;
}

const ButtonElem = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  color: grey;

  &:hover {
    color: black;
  }
`;
