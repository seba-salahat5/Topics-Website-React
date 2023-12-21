import * as React from 'react';
import HeaderComponent from '../components/HeaderComponent.js';
import HeadingComponent from '../components/HeadingComponent.js';

export default function HomeContainer() {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <HeadingComponent/>
        </React.Fragment>
    );
}