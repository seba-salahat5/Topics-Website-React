import React, {useContext} from "react";
import {DarkModeContext} from "../App";
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';

const DetailsDiv = styled.div`
margin: 50px 20px 20px 240px;
width: 43%;
border-radius: 3px;

@media screen and (max-width: 1190px){
    width: 70%;
    margin-inline: auto;
}
`;

const StyledH2 = styled.h2`
font-size: 20px;
font-weight: 600;
`;

const DetailsTitlePanel = styled.div`
width: 100%;
list-style: none;
border-radius: 7px 7px 0px 0px;
padding: 15px 30px;
border: solid 1px var(--lines-color);
border-bottom: none;
background-color: var(--bg_default);
`;

const SubTopicPanel = styled.div`
padding: 15px 30px;
width: 100%;
border: solid 1px var(--lines-color);
border-bottom: none;
background-color: var(--bg_default);
&:last-child {
    border-bottom: solid 1px var(--lines-color);
    border-radius: 0px 7px 0px 7px;
}
`;

const StyledH3 = styled.h3`
white-space: nowrap;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

const StyledIcon = styled(IonIcon)`
color: var(--brand-secondary);
font-size: 20px;
padding-right: 5px;
vertical-align: middle;
`;

export default function ListComponent({ topic, subTopics }) {
    const { darkMode  } = useContext(DarkModeContext);
    return (
        <DetailsDiv className={darkMode?'dark-mode':'light-mode'}>
            <DetailsTitlePanel>
                <StyledH2>{topic} Sub Topics</StyledH2>
            </DetailsTitlePanel>
            {subTopics.map((subTopic, index) => (
                <SubTopicPanel key = {index}>
                    <StyledH3><StyledIcon icon={checkmarkCircleOutline}></StyledIcon>{subTopic}</StyledH3>
                </SubTopicPanel>
            ))}
        </DetailsDiv>
    );
}