const express = require("express");

function createApp(logger) {
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

