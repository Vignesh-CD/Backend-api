## Simple REST API with Node.js & TypeScript

A basic REST API built using **Node.js** and **TypeScript** with:

- `GET /users` – Fetch all users
- `POST /users` – Create a new user with validation

This API uses **Express** and **in-memory JSON data** (no database).

---

###  Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm 
- Git 

---

## Initialize a Node.js Project

    npm init -y
    npm install express
    npm install --save-dev typescript ts-node-dev @types/node @types/express
---

## Create TypeScript Config

    npx tsc --init

---

##  Tech Stack

- Node.js
- Express.js
- TypeScript
- ts-node-dev (for dev server)

---

## Add Script to package.json

#### Add this script to run the server in development mode:

    "scripts": {
    "dev": "ts-node-dev src/index.ts"
    }

---

## Run the Development Server

    npm run dev

---

## Output:

    Server is running at http://localhost:3000

---

## Test the API

    GET http://localhost:3000/users

---

## Clone the Repository

    git clone git@github.com:Vignesh-CD/Backend-API.git

    cd Task9
