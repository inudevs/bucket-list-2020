import React from 'react';
import './styles/Bucket.scss';

const BucketItem = ({ name, desc, tags }) => (
  <div className="bucket">
    <div className="bucket-tags">
      {tags.map((tag) => {
        return (
          <span className="bucket-tag">
            { `#${tag}` }
          </span>
        );
      })}
    </div>
    <h1 className="bucket-name">
      { name }
    </h1>
    <p className="bucket-desc">
      { desc }
    </p>
  </div>
);

export default BucketItem;
