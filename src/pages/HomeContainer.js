import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderComponent from '../layouts/HeaderComponent.js';
import HeadingComponent from '../shared_components/HeadingComponent.js';
import SearchFieldComonent from '../home_components/SearchFieldComonent.js';
import SelectComponent from '../home_components/SelectComponent.js';
import CardComponent from '../shared_components/CardComponent.js';
import CardsGridComponent from '../home_components/CardsGridComponent.js';
import FooterComponent from '../layouts/FooterComponent.js';

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
    const sortOptions = ['Default', 'Topic Title', 'Author Name'];
    const FilterOptions = ['Default', 'Web Development Languages', 'Frontend Frameworks and Libraries', 'Backend Frameworks and Libraries', 'Databases and APIs', 'Web Development Concepts and Technologies'];
    const TopicsArray = [{ "id": 1, "topic": "HTML", "name": "Sarah Smith", "image": "html.png", "rating": 4.1, "category": "Web Development Languages" }, { "id": 2, "topic": "CSS", "name": "David Lee", "image": "css.webp", "rating": 3.58, "category": "Web Development Languages" }, { "id": 3, "topic": "JavaScript", "name": "Emily Chen", "image": "javascript.jpg", "rating": 4.09, "category": "Web Development Languages" }, { "id": 4, "topic": "jQuery", "name": "John Johnson", "image": "jquery.png", "rating": 4.06, "category": "Frontend Frameworks and Libraries" }, { "id": 5, "topic": "Angular", "name": "Jessica Davis", "image": "angular.png", "rating": 3.64, "category": "Frontend Frameworks and Libraries" }, { "id": 6, "topic": "React", "name": "Daniel Brown", "image": "react.webp", "rating": 3.79, "category": "Frontend Frameworks and Libraries" }, { "id": 7, "topic": "Vue.js", "name": "Ava Jones", "image": "vuejs.jpeg", "rating": 3.57, "category": "Frontend Frameworks and Libraries" }, { "id": 8, "topic": "Node.js", "name": "Michael Kim", "image": "nodejs.webp", "rating": 3.97, "category": "Backend Frameworks and Libraries" }, { "id": 9, "topic": "Express.js", "name": "Sophia Rodriguez", "image": "expressjs.webp", "rating": 4, "category": "Backend Frameworks and Libraries" }, { "id": 10, "topic": "Ruby on Rails", "name": "William Lee", "image": "ruby.jpeg", "rating": 3.08, "category": "Backend Frameworks and Libraries" }];

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
                <div>
                    <h3><strong>"{TopicsArray.length}" Web Topics Found</strong></h3>
                </div>
                <CardsGridComponent>
                    {TopicsArray.map((topic) => (
                        <StyledLink to={`/details/${topic.id}?topicId=${topic.id}`} key={topic.id}>
                            <Column key={topic.id}>
                                <CardComponent image={topic.image} topic={topic.topic} category={topic.category} rating={topic.rating} name={topic.name}/>
                            </Column>
                        </StyledLink>
                    ))}
                </CardsGridComponent>
            </StyledMain>
            <FooterComponent />
        </React.Fragment>
    );
}