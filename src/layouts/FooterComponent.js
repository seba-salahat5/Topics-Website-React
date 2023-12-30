import * as React from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { heart } from 'ionicons/icons';


const StyledIcon = styled(IonIcon)`
vertical-align: middle;
font-size: 17px;
color: var(--heart-color);
`;

const StyledFooter = styled.footer`
width: 100%;
padding-block: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
padding-bottom: 15px;
`;

export default function FooterComponent() {
    return (
        <StyledFooter>
            <h4>Developed with <StyledIcon icon={heart}></StyledIcon> &copy; 2023</h4>
        </StyledFooter>
    );
}