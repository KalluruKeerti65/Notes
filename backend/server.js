const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Get all notes
app.get('/api/notes', async (req, res) => {
  const notes = await db.getNotes();
  res.json(notes);
});

// Add a note
app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;
  await db.addNote(title, content);
  res.json({ success: true });
});

// Delete a note by ID
app.delete('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  await db.deleteNote(id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});