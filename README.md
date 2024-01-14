Simple web app, about web courses Using ReactJS

Guidlines: 
Responsive Web site
Component-Based Architecture
Single Source of Truth
Using Axios library for API requests
Using React Router Library for navigation between pages
Using Container Pattern for state management
High Modularity
Split JavaScript logic from the presentational components
Edgy flows handled including loaders and error handling
Asynchronous Handling
Context is used for the global data (Theme and Favorites List)
local Storage is used to presist the data

Core Functionality:
Header Contains Buttons for applying darkmode and showing favorites list
Home Page:
Web topics is loaded from the backend and added dynamically into the view.
Search for web topics while the user is typing with Debounce for 300ms.
Sort the web topics based on the Topic Title or Author Name.
Filter the web topics based on their Category (The values of Categories are dynamic and extracted from the response).
The Search, Sort, and Filter are working at the same time without resetting the results.

Details Page:
The user can see the detaild page of a topic by clicking on the topic card.
Topic Details are loaded from the API with showing a loading indicator while loading and an error message if loading failed.
The details page URL is shareable.
Details page have an Add to Favorites CTA.
Each topic can only be added once to the favorites list, and the list is persisted in local storage.




