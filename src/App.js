import React from 'react';
import Header from './Header.js';
import Bucket from './Bucket.js';
import Button from './Button.js';
import Footer from './Footer.js';
import './styles/App.scss';
import bucketData from './data/bucket.json';

const onClickButton = () => {
  window.alert('준비중입니다.');
};

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <div className="app-list">
          {bucketData.map(({ name, desc, tags }) => {
            return (
              <Bucket
                name={name}
                desc={desc}
                tags={tags}
              />
            )
          })}
        </div>
        <Button onClick={onClickButton} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
