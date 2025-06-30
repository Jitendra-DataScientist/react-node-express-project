# React‑Node Learning App 🚀

A minimal full‑stack boilerplate for learning React (frontend) with a Node.js/Express backend. Great for experimenting and building your own features.

---

## 📋 Table of Contents

- [About](#about)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)  

---

## 🔍 About

This project is designed for backend engineers learning React. It includes:

- A **Node.js/Express** backend (port **8001**)  
- A **Create React App** frontend (port **8000**)  
- A simple `/api/hello` endpoint fetched and displayed by React

You can run, test, and expand it via SSH/WinSCP—no GUI needed.

---

## ⚙️ Tech Stack

- **Frontend**: React, CRA (`react-scripts`), Fetch API  
- **Backend**: Node.js, Express, CORS middleware  

---

## 🛠 Prerequisites

Make sure you have these installed:

- Node.js (v14+) & npm  
- SSH access to your server (headless environment)  
- Optional: nodemon for live-reload during development  

---

## 📥 Installation

1. Clone this repo:
   ```bash
   git clone <your-repo-url>.git
   cd my-project

2. Install dependencies:
   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install

## 🚀 Usage

   1. Start Backend
   ```bash
   cd backend
   npm run dev  # or npm start
   ```
   Starts the server on http://localhost:8001:
   ```bash
   GET /api/hello
   Response: { "msg": "Hello from Node API!" }
   ```

   2. Start Frontend
   ```bash
   cd frontend
   npm start
   ```
   Serves React at http://localhost:8000. It proxies /api/* to the backend.

   3. Access App
   Open in browser: http://<server-ip>:8000/
   React frontend will fetch and display the backend message.

## 📂 Project Structure
   ```pgsql
   my-project/
   ├─ backend/            ← Node.js API
   │   ├─ server.js       ← Express server (manual)
   │   ├─ package.json    ← auto via npm init
   │   └─ node_modules/   ← auto via npm install
   │
   ├─ frontend/           ← React UI
   │   ├─ .env            ← sets PORT=8000 (manual)
   │   ├─ src/App.js      ← entry point, displays API data (manual updates)
   │   ├─ package.json    ← auto via create-react-app
   │   ├─ public/         ← CRA-generated files
   │   └─ node_modules/   ← auto via npm install
   │
   └─ .gitignore          ← root-level (manual)
   ```
## 🌐 API Endpoints
Method	Endpoint	Description

GET	/api/hello	Returns { msg: "Hello from Node API!" }

## Refer this for the GPT instructions
   https://drive.google.com/drive/folders/1maE2DE2tZbm9Q8xzjMA1UgeQYP9K5SvB?usp=sharing
