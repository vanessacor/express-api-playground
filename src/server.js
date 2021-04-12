require("dotenv").config();
const createApp = require("./app.js");

const port = process.env.PORT;

const app = createApp(console);
app.listen(port || 3001, () => {
  console.log(`Example app listening on ${port}`);
});

