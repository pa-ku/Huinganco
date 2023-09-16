import React from "react";
import styled from "styled-components";

const Button = styled.a`
  padding: 7px 18px;
  color: ${props => props.$altButton ? '#aff14a' : '#fff'};
  margin-top: 10px;
  background-color: #111;
  font-weight: 500;
  font-size: 16px;

  text-decoration: none;
  border-radius: 4px;
  transition: 0.2s;
  outline: 2px solid ${props => props.$altButton ? '#aff14a' : '#fff'};
  &:hover {
    color: #222;
    background-color: ${props => props.$altButton ? '#aff14a' : '#fff'};
    outline-offset: 2px;
  }
`;

export default function LinkButton({ href, ariaLabel, text,target,$altButton }) {
  return (
    <>
      <Button $altButton={$altButton} target={target} href={href} aria-label={ariaLabel}>
        {text}
      </Button>
    </>
  );
}
