import * as React from 'react';
import styled from 'styled-components';
import HeaderComponent from '../components/HeaderComponent.js';
import HeadingComponent from '../components/HeadingComponent.js';
import SearchFieldComonent from '../components/SearchFieldComonent.js';
import SelectComponent from '../components/SelectComponent.js';
import CardsGridComponent from '../components/CardsGridComponent.js';

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
    const TopicsArray = [{"id":1,"topic":"HTML","name":"Sarah Smith","image":"html.png","rating":4.1,"category":"Web Development Languages"},{"id":2,"topic":"CSS","name":"David Lee","image":"css.webp","rating":3.58,"category":"Web Development Languages"},{"id":3,"topic":"JavaScript","name":"Emily Chen","image":"javascript.jpg","rating":4.09,"category":"Web Development Languages"},{"id":4,"topic":"jQuery","name":"John Johnson","image":"jquery.png","rating":4.06,"category":"Frontend Frameworks and Libraries"},{"id":5,"topic":"Angular","name":"Jessica Davis","image":"angular.png","rating":3.64,"category":"Frontend Frameworks and Libraries"},{"id":6,"topic":"React","name":"Daniel Brown","image":"react.webp","rating":3.79,"category":"Frontend Frameworks and Libraries"},{"id":7,"topic":"Vue.js","name":"Ava Jones","image":"vuejs.jpeg","rating":3.57,"category":"Frontend Frameworks and Libraries"},{"id":8,"topic":"Node.js","name":"Michael Kim","image":"nodejs.webp","rating":3.97,"category":"Backend Frameworks and Libraries"},{"id":9,"topic":"Express.js","name":"Sophia Rodriguez","image":"expressjs.webp","rating":4,"category":"Backend Frameworks and Libraries"},{"id":10,"topic":"Ruby on Rails","name":"William Lee","image":"ruby.jpeg","rating":3.08,"category":"Backend Frameworks and Libraries"},{"id":11,"topic":"Django","name":"Olivia Martinez","image":"django.jpeg","rating":4.18,"category":"Backend Frameworks and Libraries"},{"id":12,"topic":"Flask","name":"Ethan Thompson","image":"flask.webp","rating":3.02,"category":"Backend Frameworks and Libraries"},{"id":13,"topic":"SQL","name":"Madison Davis","image":"sql.png","rating":4.45,"category":"Databases and APIs"},{"id":14,"topic":"NoSQL","name":"Isabella Wilson","image":"nosql.png","rating":4.46,"category":"Databases and APIs"},{"id":15,"topic":"REST APIs","name":"Jacob Garcia","image":"restapi.jpeg","rating":3.26,"category":"Databases and APIs"},{"id":16,"topic":"GraphQL","name":"Mia Brown","image":"graphql.png","rating":4.01,"category":"Databases and APIs"},{"id":17,"topic":"OAuth","name":"Evelyn Nguyen","image":"oauth.png","rating":3.54,"category":"Web Development Concepts and Technologies"},{"id":18,"topic":"JSON","name":"Liam Hernandez","image":"json.png","rating":3.52,"category":"Web Development Concepts and Technologies"},{"id":19,"topic":"AJAX","name":"Avery Perez","image":"ajax.gif","rating":3.22,"category":"Web Development Concepts and Technologies"},{"id":20,"topic":"Websockets","name":"Victoria Kim","image":"websockets.png","rating":3.76,"category":"Web Development Concepts and Technologies"},{"id":21,"topic":"Responsive Design","name":"Ryan Jones","image":"responsive.gif","rating":3.93,"category":"Web Development Concepts and Technologies"},{"id":22,"topic":"Accessibility","name":"Samantha Martin","image":"accessibility.png","rating":3.77,"category":"Web Development Concepts and Technologies"},{"id":23,"topic":"User Experience (UX)","name":"Luke Davis","image":"ux.jpeg","rating":4.1,"category":"Web Development Concepts and Technologies"},{"id":24,"topic":"User Interface (UI)","name":"Grace Wilson","image":"ui.png","rating":3.12,"category":"Web Development Concepts and Technologies"},{"id":25,"topic":"Design Systems","name":"Noah Martinez","image":"design-systems.jpeg","rating":4.18,"category":"Web Development Concepts and Technologies"},{"id":26,"topic":"Performance Optimization","name":"Chloe Taylor","image":"performance.png","rating":3.33,"category":"Web Development Concepts and Technologies"},{"id":27,"topic":"Cross-Browser Compatibility","name":"David Lee","image":"cross-browser.jpeg","rating":4.41,"category":"Web Development Concepts and Technologies"},{"id":28,"topic":"Search Engine Optimization (SEO)","name":"Emily Kim","image":"seo.jpeg","rating":3.81,"category":"Web Development Concepts and Technologies"},{"id":29,"topic":"Web Security","name":"Gabriel Hernandez","image":"web-security.jpeg","rating":3.69,"category":"Web Development Concepts and Technologies"},{"id":30,"topic":"Testing and Debugging","name":"Avery Perez","image":"testing.jpeg","rating":4.44,"category":"Web Development Concepts and Technologies"},{"id":31,"topic":"Continuous Integration/Continuous Deployment (CI/CD)","name":"Madison Davis","image":"ci-cd.jpeg","rating":3.99,"category":"Web Development Concepts and Technologies"},{"id":32,"topic":"DevOps","name":"Isabella Wilson","image":"devops.png","rating":4.27,"category":"Web Development Concepts and Technologies"},{"id":33,"topic":"Cloud Computing","name":"Jacob Garcia","image":"cloud.jpeg","rating":4.38,"category":"Web Development Concepts and Technologies"},{"id":34,"topic":"Docker","name":"Mia Brown","image":"docker.png","rating":3.9,"category":"Web Development Concepts and Technologies"},{"id":35,"topic":"Microservices","name":"Evelyn Nguyen","image":"microservices.png","rating":3.73,"category":"Web Development Concepts and Technologies"},{"id":36,"topic":"Progressive Web Apps (PWA)","name":"Liam Hernandez","image":"pwa.png","rating":3.14,"category":"Web Development Concepts and Technologies"},{"id":37,"topic":"Web Accessibility Initiative (WAI)","name":"Avery Perez","image":"wai.jpeg","rating":3.59,"category":"Web Development Concepts and Technologies"},{"id":38,"topic":"Content Management Systems (CMS)","name":"Victoria Kim","image":"cms.png","rating":4.03,"category":"Web Development Concepts and Technologies"},{"id":39,"topic":"Web Analytics","name":"Ryan Jones","image":"analytics.png","rating":4.07,"category":"Web Development Concepts and Technologies"}];
    
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
                <CardsGridComponent topics={TopicsArray} />
            </StyledMain>
        </React.Fragment>
    );
}