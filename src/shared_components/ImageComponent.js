import React, {useContext} from "react";
import {DarkModeContext} from "../App";
import styled from 'styled-components';

const StyledImage = styled.img`
height: 130px;
width: 100%;
object-fit: cover;
background-color: var(--card-bg);
`;

export default function ImageComponent({ imageSrc , alt }) {
    const { darkMode  } = useContext(DarkModeContext);
    return (
        <StyledImage className={darkMode?'dark-mode':'light-mode'} src={imageSrc} alt={alt} />
    );
}