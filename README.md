# Restaurant Finder

## Table of Contents
1. [**General Info**](#general-info)
2. [**Backend Technologies Used**](#backend-technology-used)
3. [**Frontend Technologies Used**](#frontend-techlogy-used)
4. [**Setup**](#setup)
5. [**Features**](#features) 
6. [**Code & Snippets**](#CodeSnippets)

## General Info
This project is a Yelp clone built using the PERN (PostgreSQL, Express.js, React, Node.js) stack. It enables users to find and review restaurants, create profiles, and interact with other users by posting reviews and ratings.

## Backend Technologies Used:

# Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling building scalable and efficient web applications.

# Express.js
Express.js is a web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and HTTP utilities.

# PostgreSQL
PostgreSQL is a powerful, open-source relational database management system. It is used to store and manage restaurant data, user profiles, reviews, and other relational data in this application.


## Frontend Technologies Used:

# HTML
HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It provides the structure for web content.

# JavaScript
JavaScript is a programming language that enables interactive and dynamic features on web pages. It's commonly used for client-side scripting and interacting with web content.

# React
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.

# React Router
React Router is a routing library for React applications. It enables navigation and rendering of different components based on the URL.

## Setup
Clone the repository: git clone https://github.com/your-username/restaurant-finder.git

Navigate to the project directory: cd restaurant-finder

Install backend dependencies: npm install

Install frontend dependencies: cd client && npm install

Start the development server: npm start

Open your browser and go to http://localhost:3000 to view the website.

Set up PostgreSQL:
Ensure PostgreSQL is installed and running on your machine.
Create a database named restaurant_finder.
Update the database configuration in the config/config.json file with your PostgreSQL username, password, and database details.

## Features

Restaurant Listings:

PostgreSQL stores restaurant data, including names, locations, categories, and images. Express.js defines endpoints for creating, retrieving, updating, and deleting restaurant listings, while React components display the restaurant information.

Reviews and Ratings:

PostgreSQL stores reviews and ratings associated with restaurants. Express.js defines endpoints for adding and retrieving reviews and ratings, while React components handle the display and interaction with these elements.

Search and Filter:

PostgreSQL supports searching and filtering of restaurant listings based on various criteria such as location, category, and rating. React components provide a user interface for searching and filtering restaurants.

# Code & Snippets: 
## Backend Code Snippets:

## Frontend Code Snippets:
