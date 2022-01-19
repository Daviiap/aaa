const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

mongoose.connect(process.env.MONGO_URL).then(() => {
	console.log("Mongoose connected");
});

const MyModel = mongoose.model("infos", new mongoose.Schema({ info: Object }));

app.use(express.static("./public"));

app.post("/data", async (req, res) => {
	try {
		console.log(req.body);

		await MyModel.create({ info: req.body });

		return res.send("GOLPISTA OTÁRIO");
	} catch (error) {
		return res.status(500).send();
	}
});

app.listen(process.env.PORT || 3000, () => {
	console.log("RODANDO PORRA");
});
