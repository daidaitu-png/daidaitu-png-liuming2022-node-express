const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/data", (req, res) => {
	fs.readFile(path.join(__dirname, "./1.json"), "utf-8", (err, data) => {
		res.json(data);
	});
});

app.listen(3000, () => {
	console.log("port", 3000);
});
