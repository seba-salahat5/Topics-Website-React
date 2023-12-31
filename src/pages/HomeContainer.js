import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderComponent from '../layouts/HeaderComponent.js';
import HeadingComponent from '../shared_components/HeadingComponent.js';
import SearchFieldComonent from '../home_components/SearchFieldComonent.js';
import SelectComponent from '../home_components/SelectComponent.js';
import CardComponent from '../shared_components/CardComponent.js';
import CardsGridComponent from '../home_components/CardsGridComponent.js';
import LoadingSpinner from '../shared_components/LoadingSpinner.js';
import FooterComponent from '../layouts/FooterComponent.js';

import { useApi } from '../customized_hooks/API_Hooks.js';

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

const Column = styled.div`
width: 100%;
margin-block: 15px;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`;
export default function HomeContainer() {
    const [topicsArray, setTopicsArray] = useState(null);
    const sortOptions = ['Default', 'Topic Title', 'Author Name'];
    const FilterOptions = ['Default', 'Web Development Languages', 'Frontend Frameworks and Libraries', 'Backend Frameworks and Libraries', 'Databases and APIs', 'Web Development Concepts and Technologies'];

    const apiUrl = 'https://tap-web-1.herokuapp.com/topics';
    const { data, loading, error } = useApi(`${apiUrl}/list`);

    useEffect(() => {
        setTopicsArray(data);
    }, [data]);

    return (
        <React.Fragment>
            <HeaderComponent />
            <HeadingComponent />
            <StyledMain>
                <MainLine>
                    <SearchFieldComonent />
                    <SelectContainer>
                        <SelectComponent type={'Sort'} options={sortOptions} />
                        <SelectComponent type={'Filter'} options={FilterOptions} />
                    </SelectContainer>
                </MainLine>
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        {error ? (
                            <div>
                                <h3><strong>Something went wrong. Web topics failed to load.</strong></h3>
                            </div>
                        ) : (
                            <>
                                {topicsArray !== null ? (
                                    <>
                                        <div>
                                            <h3><strong>"{data.length}" Web Topics Found</strong></h3>
                                        </div>
                                        <CardsGridComponent>
                                            {data.map((topic) => (
                                                <StyledLink to={`/details/${topic.id}?topicId=${topic.id}`} key={topic.id}>
                                                    <Column key={topic.id}>
                                                        <CardComponent image={topic.image} topic={topic.topic} category={topic.category} rating={topic.rating} name={topic.name} />
                                                    </Column>
                                                </StyledLink>
                                            ))}
                                        </CardsGridComponent>
                                    </>

                                ) : (
                                    <div>
                                        <h3><strong>Something went wrong. Web topics failed to load.</strong></h3>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}





            </StyledMain>
            <FooterComponent />
        </React.Fragment>
    );
}