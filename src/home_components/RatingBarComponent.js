import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: inline-block;
  font-size: 24px;
  color: var(--star-color);
  margin: 0;
`;

const RatingBarComponent = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2; 

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isHalfStar = i - 0.5 === roundedRating;
      const isFullStar = i <= roundedRating;

      stars.push(
        <StarContainer key={i}>
          {isHalfStar ? (
            <span>&#9733;</span>
          ) : (
            isFullStar ? <span>&#9733;</span> : <span>&#9734;</span>
          )}
        </StarContainer>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default RatingBarComponent;