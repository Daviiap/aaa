const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(express.static("public"));

app.post("/data", async (req, res) => {
	try {
		console.log(req.body);

		return res.send("GOLPISTA OTÁRIO");
	} catch (error) {
		return res.status(500).send();
	}
});

app.listen(3000);
