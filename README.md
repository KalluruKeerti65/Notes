# 📝 Simple Note Taker App

A full-stack note-taking application with a Node.js backend, SQLite database, and a simple HTML/CSS frontend. You can add, delete, view notes with titles, and toggle visibility of your notes.

---

## 📁 Project Structure

Full-Stack/
│
├── backend/
│   ├── server.js
│   |── notes.db
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│
├── Dockerfile
├── .dockerignore
├── package.json
└── README.md


---

## 🚀 Features

- Add notes with title and content
- Delete individual notes
- Show/Hide notes dynamically
- Backend API (RESTful) with Express + SQLite

---

## 🧪 Local Setup

### 1. Prerequisites

- [Node.js](https://nodejs.org/) installed
- SQLite3 (built-in with Node if using `sqlite3` npm package)

### 2. Clone and run locally

```bash
git clone https://github.com/yourusername/note-taker.git
cd note-taker
npm install
npm start