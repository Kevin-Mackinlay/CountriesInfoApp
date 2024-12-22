# CountriesInfoApp

Project Overview
The Country Info App is a full-stack JavaScript application designed to provide information about countries worldwide. Users can view a list of available countries, access detailed information about each country, including its population, region, flag, and neighboring countries. The app consists of a backend API and a frontend user interface that work seamlessly together.

Features
Display a list of countries fetched from a public API.
View detailed information about a selected country, including:
Official name
Population
Region
Neighboring countries
Flag

Technologies Used
Backend
Node.js: JavaScript runtime environment for server-side development.
Express.js: Web framework for building RESTful APIs.
Axios: For making HTTP requests to external APIs.
Environment Variables: Managed using .env files for secure API configurations.
Frontend
React.js: Library for building the user interface.
React Router: For navigating between pages.
Axios: For communicating with the backend API.
CSS Media Queries: For a responsive design.

Setup Instructions
Backend
Navigate to the backend directory:

bash

cd backend
Install dependencies:

bash

npm install
Create a .env file and configure the following variables:

ruby

NAGER_DATE_API=https://date.nager.at/api/v3
REST_COUNTRIES_API=https://restcountries.com/v3.1
Start the backend server:

bash

node src/app.js
The server runs on http://localhost:5000.

Frontend
Navigate to the frontend directory:

bash

cd frontend
Install dependencies:

bash

npm install
Create a .env file and configure the following variable:

arduino

REACT_APP_BACKEND_URL=http://localhost:5000
Start the frontend development server:

bash

npm start
The app runs on http://localhost:3000.

API Endpoints
Backend Endpoints
Get Available Countries
GET /api/countries/available
Returns a list of all available countries.

Get Country Info
GET /api/countries/:countryCode
Returns detailed information about a specific country based on its code.

