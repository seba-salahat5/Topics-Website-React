import * as React from 'react';
import styled from 'styled-components';
import { heartOutline } from 'ionicons/icons';
import ImageComponent from '../shared_components/ImageComponent.js';
import Button from '../details_components/Button.js';

const Card = styled.aside`
width: 50%;
max-width: 330px;
float: right;
position: relative;
bottom: 180px;
left: 52%;

@media screen and (min-width: 1650px){
    bottom: 155px;
}

@media screen and (max-width: 1190px){
    max-width: 400px;
    min-width: 300px;
    position: relative;
    float: none;
    bottom: 0px;
    left:0px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
}

@media screen and (max-width: 400px){
    min-width: 275px;
}

@media screen and (max-width: 350px){
    min-width: 245px;
}
`;

const CardBody = styled.div`
width: 100%;
padding: 2px;
background-color: var(--card-bg);
border: solid 1px var(--card-border);
`;

const CardBox = styled.div`
padding-left: 10px;
padding-right: 10px;
padding-top: 12px;
padding-bottom: 20px;
margin: 10px;
overflow: hidden;
`;

const CardText = styled.h3`
font-weight: 400;
font-size: 14px;
color: var(--card-text);
`;

const InnerBox = styled.div`
height: 160px;
padding: 20px;
margin-top: 10px;
border: solid 1px var(--card-border);
`;

const InnerText = styled.h4`
font-weight: 600;
font-size: 14px;
color: var(--card-text);
`;

const CardFooter = styled.h5`
font-weight: 200;
font-size: 14px;
color: var(--card-text);
text-align: center;
`;
export default function DetailsCardComponent({ image, topic, name }) {
    const imageSrc = `/assets/${image}`;
    return (
        <Card>
            <CardBody>
                <ImageComponent imageSrc={imageSrc}  alt={topic} />
                <CardBox>
                    <CardText><strong>{topic}</strong> by: <a href='#'>{name}</a></CardText>
                    <InnerBox>
                        <InnerText>Interested about this topic?</InnerText>
                        <Button buttonText={"Add To Favourites"} buttonIcon={heartOutline} onClickEvent={() => { console.log("Added To Fav") }} />
                        <CardFooter>Unlimited Credits</CardFooter>
                    </InnerBox>
                </CardBox>
            </CardBody>
        </Card>
    );
}