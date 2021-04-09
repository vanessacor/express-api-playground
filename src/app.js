const express = require("express");

function createApp(logger) {
  const app = express();

  app.get("/", (req, res) => {
    res.json({
      api: "express playground",
      version: "1.0",
    });
  });
  

  return app;
}

module.exports = createApp;

