import * as React from 'react';
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

const DetailsTitlePanel = styled.div`
width: 100%;
border: none;
list-style: none;
border-radius: 7px 7px 0px 0px;
height: max-content;
padding: 15px 30px;
border: solid 1px var(--lines-color);
border-bottom: none;
background-color: var(--bg_default);
`;

const SubTopicPanel = styled.div`
height: max-content;
padding: 15px 30px;
border: solid 1px var(--lines-color);
border-bottom: none;
background-color: var(--bg_default);

&:last-child {
    border-bottom: solid 1px var(--lines-color);
    border-radius: 0px 7px 0px 7px;
}
`;

const StyledIcon = styled(IonIcon)`
color: var(--brand-secondary);
font-size: 20px;
padding-right: 5px;
`;

export default function ListComponent({ topic, subTopics }) {
    return (
        <DetailsDiv>
            <DetailsTitlePanel>
                <h2>{topic} Sub Topics</h2>
            </DetailsTitlePanel>
            {subTopics.map((subTopic, index) => (
                <SubTopicPanel key = {index}>
                    <h3><StyledIcon icon={checkmarkCircleOutline}></StyledIcon>{subTopic}</h3>
                </SubTopicPanel>
            ))}
        </DetailsDiv>
    );
}