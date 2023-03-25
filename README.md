# Simple Social Media Fullstack MERN App

## Features
1. User Registration
2. User Login
3. View other peoples profile
4. Add friends
5. Post pictures and text
6. Like posts
7. Switch between Dark and Light theme

## Technologies used
### Frontend
1. React framework.
2. React Router for navigation.
3. Rormik and yup for Form and Form validation.
4. Redux Toolkit for state management.
5. Redux with Persistent to store in local storage.
6. React Dropzone for image upload.

### Backend
1. Nodejs as a runtime.
2. Expressjs as a backend framework.
3. Mongoose for managing our Mongo Database.
4. JSON Web Token for Authentication.
5. Multer for file upload in node.js.

## Running
Before running make sure to setup a database in mongoDB and to set .env file in each folder client and server there is an example.env file in each folder after that you can run both the client and server using docker and docker-compose using make sure you are in the root folder and excute this command.

```sh
docker compose up -d 
```

you can access it using localhost and the port you provided in the client .env file

```url
http://localhost:3000
```

