class Waitinglist {
    constructor(name, phone, email, uniqueID) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.uniqueID = uniqueID;
    }
}

const waitList = [];

module.exports = Waitinglist;