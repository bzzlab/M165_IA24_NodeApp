// initialize express framework
const express = require("express");
const app = express();

// create http server
const http = require("http").createServer(app);

// set the view engine as EJS
app.set("view engine", "ejs");

// include mongo DB module
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// globale Variable für die DB
let database;

// Mit MongoDB verbinden
async function connectDB() {
  try {
    await client.connect();
    database = client.db("mflixDB");
    console.log("Mit Datenbank verbunden.");
  } catch (err) {
    console.error("Fehler bei der Verbindung:", err);
  }
}
connectDB();

// GET-Route für Movies mit Pagination + Suche
app.get("/", async function (request, result) {
  try {
    const perPage = parseInt(request.query.limit) || 5; // Anzahl Filme pro Seite (Standard = 5)
    const pageNumber = parseInt(request.query.page) || 1;
    const searchQuery = request.query.search || "";

    // Suchbedingungen: Titel, Jahr oder Genre
    const query = {
      $or: [
        { title: { $regex: searchQuery, $options: "i" } },
        { year: { $regex: searchQuery, $options: "i" } },
        { genres: { $regex: searchQuery, $options: "i" } }
      ]
    };

    const total = await database.collection("movies").countDocuments(query);
    const pages = Math.ceil(total / perPage);
    const movies = await database
      .collection("movies")
      .find(query, { projection: { title: 1, year: 1, genres: 1 } })
      .sort({ year: -1 })
      .skip((pageNumber - 1) * perPage)
      .limit(perPage)
      .toArray();

    result.render("index", {
      pages: pages,
      movies: movies,
      currentPage: pageNumber,
      perPage: perPage,
      searchQuery: searchQuery
    });
  } catch (err) {
    result.status(500).send("Fehler: " + err.message);
  }
});

// start server
http.listen(3000, function () {
  console.log("Server gestartet auf Port 3000");
});