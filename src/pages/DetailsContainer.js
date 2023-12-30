import * as React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeaderComponent from '../layouts/HeaderComponent.js';
import FooterComponent from '../layouts/FooterComponent.js';

const StyledMain = styled.main`
margin-top: 15px;
margin-bottom: 15px;
padding-left: 60px;
padding-right: 60px;
`;

export default function DetailsContainer() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const topicId = searchParams.get('topicId');

    const details = {"category":"Web Development Languages","rating":4.1,"name":"Sarah Smith","image":"html.png","topic":"HTML","description":"HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images, and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.","subtopics":["HTML syntax and structure","HTML elements and attributes","HTML forms and input elements","HTML tables and lists","HTML multimedia elements (audio, video, images)","HTML accessibility and semantic markup"],"id":1};
    return (
        <React.Fragment>
            <HeaderComponent />
            <StyledMain>
                {topicId}
            </StyledMain>
            <FooterComponent />
        </React.Fragment>
    );
}