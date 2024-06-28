import express from "express";
import mysql from "mysql";

const app = express();
const PORT = 3001;

const configDB = {
  host: "db",
  user: "root",
  password: "root",
  database: "fullcycle",
};

const conn = mysql.createConnection(configDB);

conn.connect();

const sql = "INSERT INTO people (name) VALUES ('Dan')";
conn.query(sql);
conn.end();

app.get("/", async (req, res) => {
  /* conn.query(
    "SELECT name FROM people WHERE id=1",
    function (error, results, fields) {
      if (error) throw error;
      console.log(results[0].name);
    }
  ); */
  conn.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });
  conn.end();
  res.send(
    `<div><div><h1>Pagina de Tercio 4</h1></div><div>Nome adicionado: </div></div>`
  );
});

app.listen(PORT, () => {
  console.log("Server running in port ", PORT);
});
