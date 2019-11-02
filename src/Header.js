import React from 'react';
import styled from 'styled-components'; 

const Header = () => (
  <HeaderContainer>
    <Org>INU: 이루고, 누리다.</Org>
    <Title>Bucket List</Title>
    <Desc>2020년, 이런 동아리를 만들어 나갈 거예요!</Desc>
  </HeaderContainer>
)


const HeaderContainer = styled.div`
  text-align: center;
  margin: 2.2rem 0;
`

const Org = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;

  @media (max-width: 550px){
    font-size: 1.1rem;
  }
`

const Title = styled.h1`
  font-family: 'Merriweather', serif;
  text-transform: uppercase;
  font-size: 3.8rem;

  @media (max-width: 550px){
    font-size: 3rem;
  }

  @media (max-width: 400px){
    font-size: 2.2rem;
  }
`

const Desc = styled.p`
margin-top: 0.3rem;
`

export default Header;
