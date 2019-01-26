const path = require(`path`);

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, `../home.html`));
    })

    app.get("/reserve", (req, res) => {
        res.sendFile(path.join(__dirname, `../reserve.html`));
    })

    app.get("/tables", (req, res) => {
        res.sendFile(path.join(__dirname, `../tables.html`));
    })
}

