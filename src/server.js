const createApp = require("./app.js");

const port = 3000

const app = createApp(console);
app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
