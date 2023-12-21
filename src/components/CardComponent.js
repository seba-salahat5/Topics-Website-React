import * as React from 'react';
import styled from 'styled-components';
import RatingBarComponent from './RatingBarComponent.js';

const Card = styled.div`
border-radius: 10px;
object-fit: cover;
overflow: hidden;
box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
color: #333333;
background-color: #FFFFFF;
`;

const StyledImage = styled.img`
height: 130px;
width: 100%;
object-fit: cover;
background-color: #FFFFFF;
`;

const CardBody = styled.div`
padding-left: 10px;
padding-right: 10px;
padding-top: 12px;
padding-bottom: 20px;
overflow: hidden;
white-space: nowrap;
`;

const CardSubTitle = styled.h3`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin: 0;
font-size: 15px;
font-weight: 400;
`;

const CardTitle = styled.h4`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin: 0;
white-space: normal;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

const CardRatingDiv = styled.div`
padding-top: 10px;
padding-bottom: 10px;
display: flex;
`;

const LightText = styled.h5`
font-weight: 200;
font-size: 15px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin: 0;
`;

export default function CardComponent({ topic }) {
    const imageSrc = `/assets/${topic.image}`
    return (
        <Card>
            <StyledImage src={imageSrc} alt={topic.topic} />
            <CardBody>
                <CardSubTitle>{topic.category}</CardSubTitle>
                <CardTitle>{topic.topic}</CardTitle>
                <CardRatingDiv>
                    <RatingBarComponent rating={topic.rating} />
                </CardRatingDiv>
                <LightText>Author: {topic.name}</LightText>
            </CardBody>
        </Card>
    );
}