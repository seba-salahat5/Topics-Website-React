import * as React from 'react';
import styled from 'styled-components';
import HeaderComponent from '../components/HeaderComponent.js';
import HeadingComponent from '../components/HeadingComponent.js';
import SearchFieldComonent from '../components/SearchFieldComonent.js';
import SelectComponent from '../components/SelectComponent.js';

const StyledMain = styled.main`
margin-top: 15px;
margin-bottom: 15px;
padding-left: 60px;
padding-right: 60px;
`;

const MainLine = styled.div`
width: 100%;
border-radius: 10px;
display: flex;
overflow: hidden;
box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
margin-bottom: 15px;

@media screen and (max-width: 547px) {
    display: block;
}
`;

const SelectContainer = styled.div`
display: flex;
width: 35%;

@media screen and (max-width: 547px) {
    width: 100%;
    margin-top: 2px;
}
`;
export default function HomeContainer() {
    const sortOptions = ['Default', 'Topic Title', 'Author Name'];
    const FilterOptions = ['Default','Web Development Languages', 'Frontend Frameworks and Libraries', 'Backend Frameworks and Libraries', 'Databases and APIs', 'Web Development Concepts and Technologies'];
    return (
        <React.Fragment>
            <HeaderComponent/>
            <HeadingComponent/>
            <StyledMain>
                <MainLine>
                    <SearchFieldComonent/>
                    <SelectContainer>
                        <SelectComponent type={'Sort'} options={sortOptions}/>
                        <SelectComponent type={'Filter'} options={FilterOptions}/>
                    </SelectContainer>
                </MainLine>
            </StyledMain>
        </React.Fragment>
    );
}