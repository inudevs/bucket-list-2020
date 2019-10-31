import React from 'react';
import './styles/Button.scss';

const Button = ({ onClick }) => (
  <button className="button" onClick={onClick}>
    함께 이루어 나가기
  </button>
)

export default Button;
