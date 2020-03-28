import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Bucket from './Bucket';
import Button from './Button';
import Footer from './Footer';

import bucketData from './data/bucket.json';

import useConstant from './utils/useConstant';

const onClickButton = () => {
  // eslint-disable-next-line no-alert
  window.open('https://circle.dimigo.in/');
};

export default function App() {
  const AppContainer = useConstant(() => styled.div`
    display: flex;
    flex-direction: column;
  `);

  const Content = useConstant(() => styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 80%;

    @media (max-width: 400px) {
      width: 90%;
    }
  `);

  const List = useConstant(() => styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 820px) {
      width: 90%;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  `);

  return (
    <AppContainer>
      <Header />
      <Content>
        <List>
          {bucketData.map(({ name, desc, tags }) => (
            <Bucket
              name={name}
              desc={desc}
              tags={tags}
            />
          ))}
        </List>
        <Button onClick={onClickButton}>
          함께 이루어 나가기
        </Button>
      </Content>
      <Footer />
    </AppContainer>
  );
}
