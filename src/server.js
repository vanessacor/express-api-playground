require("dotenv").config();
const createApp = require("./app.js");
const mongoose = require("mongoose");



const port = process.env.PORT;

const URI = process.env.MONGODB_URI;




const app = createApp(console, URI);
app.listen(port || 3001, () => {
  console.log(`Example app listening on ${port}`);
});


