const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { select, insert } = require("./user.js");



app.get("/get-records", async (req, res) => {

    const list = await getRecord();
    res.json(list);
});

app.post("/add-records", async (req, res) => {
    const user = req.body;
    await addRecord(user);
    res.json("new record added")
});

app.listen(5000, () => {
    console.log("done");
});