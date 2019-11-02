import React from 'react';
import styled from 'styled-components';

import linkData from './data/link.json';

import useConstant from './utils/useConstant';

export default function Footer() {
  function ItemList() {
    const List = useConstant(() => styled.ul`
      display: flex;
      justify-content: center;
      list-style: none;
    `);
    const Item = useConstant(() => styled.a`
      color: rgba(0, 0, 0, 0.3);
      font-size: 2.2rem;
      margin-left: 0.5rem;
      transition: color 0.3s linear;

      &:first-child {
        margin-left: 0;
      }

      &:hover,
      &:focus {
        color: black;
      }
    `);

    return (
      <List>
        {linkData.map((item) => (
          <Item
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab ${item.icon}`} />
          </Item>
        ))}
      </List>
    );
  }

  const FooterContainer = useConstant(() => styled.footer`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2.2rem 0;
    width: 100%;
  `);
  const Description = useConstant(() => styled.span`
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.9rem;
  `);
  const Button = useConstant(() => styled.a`
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.8rem;
    transition: color 0.3s linear;

    &:hover,
    &:focus {
      color: black;
    }
  `);

  return (
    <FooterContainer>
      <ItemList />
      <Description>
        INU와 함께 새로운 도전을 해 나갈 팀원을 찾습니다.
      </Description>
      <Button
        href="https://forms.gle/ko8fkx1gXGfFuXh77"
        target="_blank"
        rel="noopener noreferrer"
      >
        버킷리스트 추가하기
      </Button>
    </FooterContainer>
  );
}
