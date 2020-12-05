const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const PORT = 5001;

//set up to receive JSOn and string data
//NEED FOR EVERY PROJECT!!!!!
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// routes as middleware
app.use("/api", apiRoutes);
// server listening
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}/api`));