import React from "react";
import styled from 'styled-components';

const CardsGrid = styled.div`
width: 100%;
padding-bottom: 20px;
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

export default function CardsGridComponent({children}) { 
    return (
        <CardsGrid>{children}</CardsGrid>
    );
}