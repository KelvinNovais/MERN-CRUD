const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const mysql = require('mysql');
const db = mysql.createConnection({
  user: 'root',
  host: '192.168.122.103',
  port: 30306,
  password: 'password',
  database: 'employeeSystem',
})

app.listen(3001, () => {
  console.log("Wow, the server is running on port 3001.")
})

app.post('/create', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)",
    [name, age, country, position, wage],
    (err, result) => {
     if (err) {
      console.log(err);
     } else {
      res.send("Values inserted.")
     }
    }
  );
});

app.get('/getEmployees', (req, res)=> {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})
