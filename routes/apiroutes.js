const tableResData = require(`../data/tableres`);
const waitingListData = require(`../data/waitinglist`);

module.exports = (app) => {
    app.get("/api/tables", (req, res) => {
        return res.json(tableResData);
    })

    app.get("/api/waitlist", function (req, res) {
        return res.json(waitingListData);
    });
}