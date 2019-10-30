import React from 'react';
import Header from './Header.js';
import Bucket from './Bucket.js';
import './styles/App.scss';
import bucketData from './data/bucket.json';

function App() {
  return (
    <div className="app">
      <Header />
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
    </div>
  );
}

export default App;
