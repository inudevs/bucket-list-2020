import React from 'react';
import styled from 'styled-components';

import linkData from './data/link.json';

import useConstant from './utils/useConstant';

export default function Footer() {
  function ItemList() {
    const List = useConstant(() => styled.ul`
      display: flex;
      list-style: none;
      justify-content: center;
    `);
    const Item = useConstant(() => styled.a`
      font-size: 2.2rem;
      margin-left: 0.5rem;
      color: rgba(0, 0, 0, 0.3);
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
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 2.2rem 0;
  `);
  const Description = useConstant(() => styled.span`
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.3);
  `);
  const Button = useConstant(() => styled.a`
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.3);
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
