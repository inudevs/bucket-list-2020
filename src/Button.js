import React from 'react';
import styled from 'styled-components'; 

const Button = ({ onClick }) => (
  <Btn onClick={onClick}>
    함께 이루어 나가기
  </Btn>
)

const Btn = styled.button`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  width: fit-content;
  padding: 0.7rem 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 700;
  transition: all 0.2s linear;
  
  &:focus {
    outline: none;
  }
`
export default Button;
