const process = require("process");
const express = require("express");
const tutorialRoutes = require("./app/routes/tutorial.routes");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json);
app.use("/api/tutorials", tutorialRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ status: 404, message: "url does not exist" });
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}...`);
});
