import * as React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
height: 130px;
width: 100%;
object-fit: cover;
background-color: var(--bg_default);
`;

export default function ImageComponent({ imageSrc , alt }) {
    return (
        <StyledImage src={imageSrc} alt={alt} />
    );
}