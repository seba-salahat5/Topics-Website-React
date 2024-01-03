import React, {useContext} from "react";
import {DarkModeContext} from "../App.js";
import styled, { css } from 'styled-components';
import RatingBarComponent from '../shared_components/RatingBarComponent.js';
import ImageComponent from '../shared_components/ImageComponent.js';

const FlexItem = styled.div`
width: 140px;
margin: 10px;
color: var(--body-text);
background-color: var(--bg_default);
`;

const FavCardbox = styled.div`
border-radius: 5px;
object-fit: cover;
overflow: hidden;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const InfoBox = styled.div`
padding-inline: 5px;
padding-top: 0px;
padding-bottom: 10px;
overflow: hidden;
white-space: nowrap;
`;

const CardTitle = styled.h2`
white-space: normal;
overflow: hidden;
text-overflow: ellipsis;
margin: 0;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

export default function FavouriteCardComponent({ image, topic, rating}) {
    const imageSrc = `/assets/${image}`;
    const { darkMode  } = useContext(DarkModeContext);
    return (
        <FlexItem className={darkMode ? 'dark-mode' : 'light-mode'}>
            <FavCardbox>
                <ImageComponent imageSrc={imageSrc}  alt={topic} height={'70px'}/>
                <InfoBox>
                    <CardTitle>{topic}</CardTitle>
                    <RatingBarComponent rating={rating}/>
                </InfoBox>
            </FavCardbox>
        </FlexItem>
    );
}