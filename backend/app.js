const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/soldier", (req, res) => {
	res.json({ data });
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
