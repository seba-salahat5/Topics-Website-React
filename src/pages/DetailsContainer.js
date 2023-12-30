import * as React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeaderComponent from '../layouts/HeaderComponent.js';
import HeadingComponent from '../shared_components/HeadingComponent.js';
import RatingBarComponent from '../shared_components/RatingBarComponent.js';
import DetailsCardComponent from '../details_components/DetailsCardComponent.js';
import FooterComponent from '../layouts/FooterComponent.js';

const DarkBanner = styled.section`
background-color: var(--dark-container-bg);
`;

const DetailsDiv = styled.div`
margin-left: 240px;
padding-block: 40px;
width: 44%;
@media screen and (max-width: 1190px){
    margin: auto;
    padding-block: 40px;
    width: 70%;
    display: block;
}
`;

const Title = styled.h2`
color: var(--brand-secondary);
font-weight: 400;
`;

const HighlightedText = styled.h1`
color: var(--dark_body-text);
`;

const RatingBar = styled(RatingBarComponent)`
margin: 0;
padding: 0;
`;

const DetailsParagraph = styled.p`
color: var(--dark_body-text);
margin: 0px;
font-size: 16px;
font-weight: 400;
padding-right: 15px;
`;
export default function DetailsContainer() {
    //const location = useLocation();
    //const searchParams = new URLSearchParams(location.search);
    //const topicId = searchParams.get('topicId');

    const details = {"category":"Web Development Languages","rating":4.1,"name":"Sarah Smith","image":"html.png","topic":"HTML","description":"HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images, and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.","subtopics":["HTML syntax and structure","HTML elements and attributes","HTML forms and input elements","HTML tables and lists","HTML multimedia elements (audio, video, images)","HTML accessibility and semantic markup"],"id":1};
    return (
        <React.Fragment>
            <HeaderComponent />
            <HeadingComponent/>
            <main>
                <DarkBanner>
                    <DetailsDiv>
                        <Title>{details.category}</Title>
                        <HighlightedText>{details.topic}</HighlightedText>
                        <RatingBar rating={details.rating}/>
                        <DetailsParagraph>{details.description}</DetailsParagraph>
                        <DetailsCardComponent image={details.image} topic={details.topic} name={details.name} />
                    </DetailsDiv>
                </DarkBanner>
            </main>
            <FooterComponent />
        </React.Fragment>
    );
}