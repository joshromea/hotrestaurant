// Dependencies //
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/api/tables", (req, res) => {
    return res.json()
})


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})