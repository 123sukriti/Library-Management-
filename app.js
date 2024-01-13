/*const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'Project1',
  password: 'wpu@123',
  database: 'lib1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML and static files
app.use(express.static('public'));

// Route for handling POST requests from the form
app.post('/addBook', (req, res) => {
  const { bookTitle, author, publicationYear, bookId } = req.body;
 

  // Insert the book into the database
  pool.query(
    'INSERT INTO books (id, title, author, publication_year) VALUES (?, ?, ?, ?)',
    [bookId, bookTitle, author, publicationYear],
    (error, results) => {
      if (error) {
        console.error('Error adding book to the database:', error);
        res.status(500).send('Internal Server Error');
      } else {
        // Fetch all books from the database
        pool.query('SELECT * FROM books', (error, results) => {
          if (error) {
            console.error('Error fetching books from the database:', error);
            res.status(500).send('Internal Server Error');
          } else {
            // Send the MySQL output along with the HTML page
            res.status(200).sendFile(__dirname + '/public/util.html');
          }
        });
      }
    }
  );
});

app.get('/', (req, res) => {
  // You can customize this logic based on your requirements
  res.sendFile(__dirname + '/public/util.html');
});
*/

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'Project1',
  password: 'wpu@123',
  database: 'lib1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML and static files
app.use(express.static('public'));

// Route for handling POST requests from the form
app.post('/addBook', (req, res) => {
  const { bookTitle, author, publicationYear, bookId } = req.body;
 

  // Insert the book into the database
  pool.query(
    'INSERT INTO books (id, title, author, publication_year) VALUES (?, ?, ?, ?)',
    [bookId, bookTitle, author, publicationYear],
    (error, results) => {
      if (error) {
        console.error('Error adding book to the database:', error);
        res.status(500).send('Internal Server Error');
      } else {
        // Fetch all books from the database
        pool.query('SELECT * FROM books', (error, results) => {
          if (error) {
            console.error('Error fetching books from the database:', error);
            res.status(500).send('Internal Server Error');
          } else {
            // Send the MySQL output along with the HTML page
            res.status(200).sendFile(__dirname + '/public/util.html');
          }
        });
      }
    }
  );
});

app.get('/', (req, res) => {
  // You can customize this logic based on your requirements
  res.sendFile(__dirname + '/public/util.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});