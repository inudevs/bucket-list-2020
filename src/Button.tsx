import React, { ReactNode } from 'react';
import styled from 'styled-components';

import useConstant from './utils/useConstant';

interface ButtonProps {
  children: ReactNode,
  onClick?: () => void,
};

const Button: React.SFC<ButtonProps> = ({ children, onClick = () => {} }) => {
  const ButtonContainer = useConstant(() => styled.button`
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    display: flex;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s linear;
    width: fit-content;

    &:focus {
      outline: none;
    }
  `);

  return (
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
