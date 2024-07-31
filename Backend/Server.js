const express = require("express");
const bodyParser = require("body-parser");
const formRoutes = require("./routes/Form");

const app = express();

app.use(bodyParser.json());
app.use("/api/form", formRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3000");
});
