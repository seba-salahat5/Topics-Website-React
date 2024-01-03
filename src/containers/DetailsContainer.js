import React, { useEffect, useState } from 'react';
//View Imports
import styled from 'styled-components';
import LoadingSpinner from '../shared_components/LoadingSpinner.js';
import RatingBarComponent from '../shared_components/RatingBarComponent.js';
import DetailsCardComponent from '../details_components/DetailsCardComponent.js';
import ListComponent from '../details_components/ListComponent.js';

//Functions Imports
import { useLocation } from 'react-router-dom';
import { API_URL } from '../constants.js';
import { useApi } from '../customized_hooks/API_Hooks.js';
import { useFavourites } from '../contexts/FavouritesProvider.js';

const DarkBanner = styled.section`
background-color: var(--dark-container-bg);
`;

const DetailsDiv = styled.div`
margin-left: 240px;
padding-block: 40px;
width: 44%;
@media screen and (max-width: 1190px){
    margin: auto;
    padding-block: 40px;
    width: 70%;
    display: block;
}
`;

const Title = styled.h2`
color: var(--brand-secondary);
font-weight: 400;
`;

const HighlightedText = styled.h1`
color: var(--dark_body-text);
`;

const RatingBar = styled(RatingBarComponent)`
margin: 0;
padding: 0;
`;

const DetailsParagraph = styled.p`
color: var(--dark_body-text);
margin: 0px;
font-size: 16px;
font-weight: 400;
padding-right: 15px;
`;

export default function DetailsContainer() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const topicId = searchParams.get('topicId');

    const [details, setDetails] = useState(null);
    const { data, loading, error } = useApi(`${API_URL}/details/${topicId}`);
    const { favourites, addFavourite, removeFavourite, isFav } = useFavourites();

    const handleFavouriteButton = () => {
        const isCourseInFavourites = isFav(details.id, favourites);

        if (isCourseInFavourites) {
            removeFavourite(details.id);
        } else {
            addFavourite(details);
        }
    };

    useEffect(() => {
        setDetails(data);
    }, [data]);
    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {error ? (
                        <div>
                            <h3><strong>Something went wrong. Topic's details failed to load.</strong></h3>
                        </div>
                    ) : (
                        <>
                            {details !== null ? (
                                <>
                                    <main>
                                        <DarkBanner>
                                            <DetailsDiv>
                                                <Title>{details.category}</Title>
                                                <HighlightedText>{details.topic}</HighlightedText>
                                                <RatingBar rating={details.rating} />
                                                <DetailsParagraph>{details.description}</DetailsParagraph>
                                                <DetailsCardComponent image={details.image} topic={details.topic} name={details.name} id={details.id} handleCardButton={handleFavouriteButton} />
                                            </DetailsDiv>
                                        </DarkBanner>
                                        <ListComponent topic={details.topic} subTopics={details.subtopics} />
                                    </main>
                                </>
                            ) : (
                                <div>
                                    <h3><strong>Something went wrong. Topic's details failed to load.</strong></h3>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
}