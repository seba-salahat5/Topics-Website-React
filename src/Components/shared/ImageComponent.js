import React from "react";
import styled from 'styled-components';

const StyledImage = styled.img`
width: 100%;
object-fit: cover;
background-color: var(--card-bg);
`;

export default function ImageComponent({ imageSrc , alt, height  }) {
    return (
        <StyledImage src={imageSrc} alt={alt} style={{height}} />
    );
}