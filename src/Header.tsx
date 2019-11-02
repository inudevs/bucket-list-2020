import React from 'react';
import styled from 'styled-components';

import useConstant from './utils/useConstant';

export default function Header() {
  const HeaderContainer = useConstant(() => styled.div`
    margin: 2.2rem 0;
    text-align: center;
  `);
  const Organization = useConstant(() => styled.h2`
    font-size: 1.2rem;
    font-weight: 700;

    @media (max-width: 550px) {
      font-size: 1.1rem;
    }
  `);
  const Title = useConstant(() => styled.h1`
    font-family: "Merriweather", serif;
    font-size: 3.8rem;
    text-transform: uppercase;

    @media (max-width: 550px) {
      font-size: 3rem;
    }

    @media (max-width: 400px) {
      font-size: 2.2rem;
    }
  `);
  const Description = useConstant(() => styled.p`
    margin-top: 0.3rem;
  `);

  return (
    <HeaderContainer>
      <Organization>INU: 이루고, 누리다.</Organization>
      <Title>Bucket List</Title>
      <Description>2020년, 이런 동아리를 만들어 나갈 거예요!</Description>
    </HeaderContainer>
  );
}
