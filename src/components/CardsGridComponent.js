import * as React from 'react';
import styled from 'styled-components';
import CardComponent from './CardComponent.js';

const CardsGrid = styled.div`
width: 100%;
display: grid;
justify-content: space-between;
grid-template-columns: 18% 18% 18% 18% 18%;

@media screen and (min-width: 1600px) {
    grid-template-columns: 15% 15% 15% 15% 15% 15%;
}

@media screen and (max-width: 1220px) {
    grid-template-columns: 23% 23% 23% 23%;
}

@media screen and (max-width: 970px) {
    grid-template-columns: 30% 30% 30%;
}

@media screen and (max-width: 670px) {
    grid-template-columns: 45% 45%;
}

@media screen and (max-width: 490px) {
    grid-template-columns: 100%;
}
`;

const Column = styled.div`
width: 100%;
margin-block: 15px;
`;


export default function CardsGridComponent({ topics }) { 
    return (
        <React.Fragment>
            <h3><strong>"{topics.length}" Web Topics Found</strong></h3>
            <CardsGrid>
                {topics.map((topic) => (
                    <Column key={topic.id}>
                        <CardComponent topic={topic} />
                    </Column>
                ))}
            </CardsGrid>
        </React.Fragment>
    );
}