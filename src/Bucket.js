import React from 'react';
import styled from 'styled-components';

import useConstant from './utils/useConstant';

export default function Bucket({ name, desc, tags }) {
  const BucketContainer = useConstant(() => styled.div`
    flex: 0 0 30%;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;

    @media (max-width: 560px) {
      flex: 0 0 100%;
    }
  `);
  const TagList = useConstant(() => styled.div`
    margin-bottom: 0.2rem;
  `);
  const Tag = useConstant(() => styled.div`
    display: inline-block;
    font-weight: 300;
  `);
  const Name = useConstant(() => styled.h1`
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
    word-break: keep-all;
  `);
  const Description = useConstant(() => styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    word-break: keep-all;
  `);

  return (
    <BucketContainer>
      <TagList>
        {tags.map((tag) => (
          <Tag>{`#${tag}`}</Tag>
        ))}
      </TagList>
      <Name>{name}</Name>
      <Description>{desc}</Description>
    </BucketContainer>
  );
}
