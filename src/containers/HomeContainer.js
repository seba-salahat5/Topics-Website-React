import React, { useEffect, useState } from 'react';

// View Imports
import styled from 'styled-components';
import InputFieldComonent from '../components/InputFieldComonent.js';
import SelectComponent from '../components/SelectComponent.js';
import CardComponent from '../components/CardComponent.js';
import CardsGridComponent from '../components/CardsGridComponent.js';
import LoadingSpinner from '../shared_components/LoadingSpinner.js';

// Functions Imports
import { Link } from 'react-router-dom';
import { API_URL } from '../constants.js';
import { useApi } from '../customized_hooks/useApi.js';
import { useDebounce } from '../customized_hooks/useDebounce.js';
import { extractCategories, onFilterChange, onSortChange } from '../javaScript_functions/topics_functions.js';

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
    const [inputValue, setInputValue] = useState('');
    const [filterOptions, setFilterOptions] = useState([]);
    const sortOptions = ['Default', 'Topic Title', 'Author Name'];
    const [selectedFilter, setSelectedFilter] = useState("Default");
    const [selectedSort, setSelectedSort] = useState("Default");

    const { data, loading, error } = useApi(`${API_URL}/list`, inputValue);
    const { DebouncedAction } = useDebounce((term) => {
        setInputValue(term);
    });
    useEffect(() => {
        if (data) {
            extractCategories(data, (categories) => {
                setFilterOptions(categories);
            });

            let filteredTopics = onFilterChange(data, selectedFilter);
            let sortedTopics = onSortChange(filteredTopics, selectedSort);
            setTopicsArray(sortedTopics);
        }
    }, [data, selectedFilter, selectedSort]);

    return (
        <StyledMain>
            <MainLine>
                <InputFieldComonent placeholder="Search the website..." onInput={
                    (inputValue) => {
                        DebouncedAction(inputValue);
                    }
                } />
                <SelectContainer>
                    <SelectComponent type={'Sort'} options={sortOptions} onSelect={(selectedValue) => { setSelectedSort(selectedValue) }} />
                    <SelectComponent type={'Filter'} options={filterOptions} onSelect={(selectedValue) => { setSelectedFilter(selectedValue) }} />
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
                                        <h3><strong>"{topicsArray.length}" Web Topics Found</strong></h3>
                                    </div>
                                    <CardsGridComponent>
                                        {topicsArray.map((topic) => (
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
    );
}