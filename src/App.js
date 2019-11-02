import React from 'react';
import Header from './Header.js';
import Bucket from './Bucket.js';
import Button from './Button.js';
import Footer from './Footer.js';
import bucketData from './data/bucket.json';
import styled from 'styled-components';

const onClickButton = () => {
  window.alert('준비중입니다.');
};

function App() {
  return (
    <AppContainer>
      <Header />
      <Content>
        <List>
          {bucketData.map(({ name, desc, tags }) => {
            return (
              <Bucket
                name={name}
                desc={desc}
                tags={tags}
              />
            )
          })}
        </List>
        <Button onClick={onClickButton} />
      </Content>
      <Footer />
    </AppContainer>
  );
}


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    width: 90%;
  }
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

   @media (max-width: 820px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`
export default App;
