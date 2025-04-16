const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('notes.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY,
    title TEXT,
    content TEXT
  )`);
});

module.exports = {
  getNotes: () => new Promise((resolve, reject) => {
    db.all("SELECT * FROM notes", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }),
  addNote: (title, content) => new Promise((resolve, reject) => {
    db.run("INSERT INTO notes (title, content) VALUES (?, ?)", [title, content], function(err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  }),
  deleteNote: (id) => new Promise((resolve, reject) => {
    db.run("DELETE FROM notes WHERE id = ?", [id], function(err) {
      if (err) reject(err);
      else resolve();
    });
  }),
};