import React from 'react';
import styled from 'styled-components';

import useConstant from './utils/useConstant';

import achievedImage from './assets/achieved.png';

interface BucketProps {
  name?: string;
  desc?: string;
  tags?: Array<string>;
  achieved?: boolean;
};

const Bucket: React.SFC<BucketProps> = ({
  name = '',
  desc = '',
  tags = [],
  achieved = false,
}) => {
  const BucketContainer = useConstant(() => styled.div`
    flex: 0 0 30%;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    position: relative;

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
  const AchievedBadge = useConstant(() => styled.img`
    width: 108px;
    height: 108px;
    position: absolute;
    bottom: 0;
    right: 0;
    filter: opacity(0.7);
    z-index: -1;
    user-select: none;
    -webkit-user-drag: none;
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
      {achieved && <AchievedBadge
        src={achievedImage}
      />}
    </BucketContainer>
  );
}

export default Bucket;
