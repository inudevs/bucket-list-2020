import React from 'react';
import styled from 'styled-components';

const BucketItem = ({ name, desc, tags }) => (
  <Bucket>
    <Tags>
      {tags.map((tag) => {
        return (
          <Tag>
            { `#${tag}` }
          </Tag>
        );
      })}
    </Tags>
    <Name>
      { name }
    </Name>
    <Desc>
      { desc }
    </Desc>
  </Bucket>
);


const Bucket = styled.div`
  flex: 0 0 30%;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;

  @media (max-width: 560px) {
  flex: 0 0 100%;
`

const Tags = styled.div`
  margin-bottom: 0.2rem;
`

const Tag = styled.div`
  display: inline-block;
  font-weight: 300;
`

const Name = styled.h1`
  margin-bottom: 0.3rem;
  font-weight: 700;
  font-size: 1.1rem;
  word-break: keep-all;
`

const Desc = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  word-break: keep-all;
`

export default BucketItem;
