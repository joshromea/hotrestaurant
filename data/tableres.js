class TableRes {
    constructor(name, phone, email, uniqueID) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.uniqueID = uniqueID;
    }
}

const newTable = new TableRes();

module.exports = TableRes;