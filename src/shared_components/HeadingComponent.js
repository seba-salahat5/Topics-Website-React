import * as React from 'react';
import styled from 'styled-components';


const Heading = styled.div`
display: flex;
justify-content: center;
position: relative;
padding-bottom: 15px;
background-color: var(--bg_default);
`;

const LeftTriengle = styled.div`
border-style: solid;
z-index: 1;
border-width: 0px 0 70px 90vw;
border-color: transparent transparent transparent var(--brand-primary);
position: absolute;
left: 0;
`;

const RightTriengle = styled.div`
border-style: solid;
z-index: 1;
border-width: 0 90vw 70px 0;
border-color: transparent var(--brand-secondary) transparent transparent;
position: absolute;
right: 0;
`;

const HeadingText = styled.div`
padding-top: 45px;
text-align: left;
z-index: 2;

@media screen and (max-width: 650px) {
    padding-top: 70px;
    padding-left: 15px;
}
`;

const StyledParagraph = styled.p`
padding: 0;
margin: 0;
font-weight: 400;
`;

const StyledHeading1 = styled.h2`
color: var(--brand-secondary);
font-weight: 600;
font-size: 20px;
margin-top: 8px;
`;
export default function HeadingComponent() {
    return (
        <Heading>
            <RightTriengle/>
            <LeftTriengle/>
            <HeadingText>
                <StyledHeading1>Welcome to our website!</StyledHeading1>
                <StyledParagraph>We have a new design that's fresh, modern, and easy to use.</StyledParagraph>
            </HeadingText>
        </Heading>
    );
}