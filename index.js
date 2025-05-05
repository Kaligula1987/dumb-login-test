const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve login.asp
app.get(['/login.asp', '/'], (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Dumb Login</title>
      <style>
        body {
          background-color: black;
          color: #00ff00;
          font-family: monospace;
          padding: 40px;
        }
        .container {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          border: 1px solid #00ff00;
          background-color: #111;
          box-shadow: 0 0 10px #00ff00;
        }
        input, button {
          width: 100%;
          padding: 8px;
          margin: 8px 0;
          background-color: black;
          color: #00ff00;
          border: 1px solid #00ff00;
        }
        button:hover {
          background-color: #00ff00;
          color: black;
        }
        .hint {
          color: #888;
          font-size: 0.9em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>// Dumb Login //</h1>
        <form method="POST" action="/login.asp">
          <label>Username:</label><br>
          <input type="text" name="username"><br>
          <label>Password:</label><br>
          <input type="password" name="password"><br>
          <button type="submit">LOGIN</button>
        </form>
        <p class="hint">Hint: The dev is lazy, didn't choose a strong password.</p>
        <p class="hint">Hint: Try the most common username.</p>
      </div>
    </body>
    </html>
  `);
});

// Login POST
app.post('/login.asp', (req, res) => {
  const { username: u, password: p } = req.body;

  if (u === creds.username && p === creds.password) {
    res.send(`<h1 style="color:lime;font-family:monospace;">Welcome, admin!</h1>`);
  } else {
    res.send(`<h2 style="color:red;font-family:monospace;">Access Denied</h2><a href="/login.asp" style="color:gray;">Try again</a>`);
  }
});

// Dumb hardcoded credentials (kept hidden near the end)
const creds = {
  username: 'admin',
  password: '12345'
};

app.listen(port, () => {
  console.log(`💀 Dumb login lab ready at http://localhost:${port}/login.asp`);
});
