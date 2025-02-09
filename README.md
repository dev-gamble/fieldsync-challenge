# FieldSync Challenge - React + TypeScript + Vite

This project is a full-stack web application that fetches and stores user data from an API. 
It uses **React (Vite) + TypeScript** for the frontend and **Node.js + Express + PostgreSQL (Docker)** for the backend.

## 🚀 Features
- Fetch user data from an external API
- Store and retrieve users in a PostgreSQL database
- Uses Docker to containerize the API and database

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) & Docker Compose

## 📦 Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/dev-gamble/fieldsync-challenge.git
cd fieldsync-challenge
```

### 2️⃣ Install dependencies
`npm install`

### 3️⃣ Set up the backend (API + Database)
`docker-compose up --build -d`

This will start:

- The PostgreSQL database (port 5432)
- The Express API server (port 3001)
- Automatically set up the database with the necessary tables.

### 4️⃣ Start the frontend
`npm run dev`

## The application should now be running at http://localhost:5173.

📜 License
- This project is open-source under the MIT License.
