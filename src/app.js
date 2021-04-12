const express = require("express");

const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

function createApp(logger, URI) {
  mongoose.connect(URI, options);
  const db = mongoose.connection;
  db.on("error", (err) => console.error(err));

  const app = express();
  app.get("/", (req, res) => {
    res.json({
      api: "express playground",
      version: "1.0",
    });
  });

  app.use((req, res) => {
    res.status(404);
    res.json({ message: "not found :-(" });
  });

  return app;
}

module.exports = createApp;
