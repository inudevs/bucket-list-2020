import React from 'react';
import styled from 'styled-components';


export default function FooterComponent(){
  function Footer(){
    const FooterContainer = styled.footer`
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 2.2rem 0;
    `
  
    const List = styled.ul`
      display: flex;
      list-style: none;
      justify-content: center;
    `
    
    const Item = styled.a`
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
    `
    
    const Desc = styled.span`
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.3);
    `
    
    const Add = styled.a`
      font-size: 0.8rem;
      color: rgba(0, 0, 0, 0.3);
      transition: color 0.3s linear;
    
      &:hover,
      &:focus {
        color: black;
      }
    `

    return(
        <FooterContainer>
        <List>
          <Item
            href="https://github.com/inudevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </Item>
          <Item
            href="http://facebook.com/inudevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook"></i>
          </Item>
          <Item
            href="http://messenger.com/t/inudevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-messenger"></i>
          </Item>
        </List>
        <Desc>
          INU와 함께 새로운 도전을 해 나갈 팀원을 찾습니다.
        </Desc>
        <Add
          href="https://forms.gle/ko8fkx1gXGfFuXh77"
          target="_blank"
          rel="noopener noreferrer"
        >
          버킷리스트 추가하기
        </Add>
      </FooterContainer>
      )
    }

    return (
      <div classname="FooterComponent">
        <Footer />
      </div>
    )
}
