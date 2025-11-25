Full-Stack Blog Platform

This repository contains the source code for a full-stack blog application. The project features a classic vanilla JavaScript frontend, a robust backend powered by Node.js and Express, and a PostgreSQL database for persistent data storage.

This project serves as an excellent example of a traditional client-server architecture.

<img width="1447" height="908" alt="image" src="https://github.com/user-attachments/assets/e4ec5c5e-8dea-497b-a51f-7bb670381547" />
<img width="1483" height="911" alt="image" src="https://github.com/user-attachments/assets/849dfb36-01a6-4485-b683-df9119d4d884" />
<img width="1324" height="885" alt="image" src="https://github.com/user-attachments/assets/efa433e2-5deb-4cdc-9a47-96c6b9a4ba1c" />
<img width="1355" height="910" alt="image" src="https://github.com/user-attachments/assets/1313c789-ea4a-4308-9863-023356b0f39b" />




Architecture Overview
The application follows a standard full-stack data flow:

Client (Frontend): The user interacts with the HTML, CSS, and JavaScript files running in their browser.

API Request: When the page loads, the frontend JavaScript makes an API call (e.g., fetch('/api/posts')) to the backend server to request blog data.

Server (Backend): The Node.js/Express server receives the API request.

Database Query: The server queries the PostgreSQL database to retrieve the list of all blog posts.

API Response: The database returns the data to the server, which then sends it back to the client as a JSON response.

DOM Manipulation: The frontend JavaScript receives the JSON data and dynamically creates and displays the blog post cards on the page.

Features
Dynamic Content: Blog posts are fetched dynamically from a database, not hardcoded in HTML.

RESTful API: A backend API built with Node.js and Express handles data requests.

Persistent Storage: A PostgreSQL database stores all blog post information.

Responsive Design: A clean and functional layout that works well on both desktop and mobile devices.

Decoupled Architecture: A clear separation between the client-side and server-side code.

Tech Stack
Frontend: HTML5, CSS3, Vanilla JavaScript (ES6)

Backend: Node.js, Express.js

Database: PostgreSQL

Getting Started (Local Development)
Prerequisites
Node.js installed

A running PostgreSQL database instance

Check it out here ->
https://blog-pfrd.onrender.com/

Setup Instructions
Clone the repository:

git clone [https://github.com/shruti4265/Blog.git](https://github.com/shruti4265/Blog.git)

Navigate to the project directory:

cd Blog

Install backend dependencies:

npm install

Configure Environment Variables:

Create a file named .env in the root of the project.

Add your PostgreSQL connection details to this file. It should look something like this (replace with your actual credentials):

DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:5432/YOUR_DATABASE"

Set up the database schema:

(Optional: Add instructions here if you have a .sql file to set up the tables. For example: psql -U YOUR_USER -d YOUR_DATABASE -a -f setup.sql)

Start the backend server:

npm start

View the application:
Open your browser and navigate to http://localhost:3000 (or whichever port is configured in your server).

Deployment on Render
To deploy this full-stack application, you need to set up both a Web Service for the backend and a Database service.

Create a PostgreSQL Database on Render:

From the Render dashboard, click New + -> PostgreSQL.

Give your database a name and create it.

Once it's ready, copy the Internal Connection String. You will need this for your web service.

Create a Web Service on Render:

Click New + -> Web Service.

Connect your shruti4265/Blog GitHub repository.

Use the following settings during configuration:

Build Command: npm install

Start Command: node server.js (or your main server file)

Add Environment Variables:

In your Web Service settings, go to the Environment tab.

Click Add Environment Variable.

For the key, enter DATABASE_URL.

For the value, paste the Internal Connection String you copied from your Render PostgreSQL database.

Deploy:

Click Create Web Service. Render will build and deploy your application, connecting it to your new database.
