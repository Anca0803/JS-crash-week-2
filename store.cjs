const chalk = require('chalk');
module.exports = class Store {
    constructor(name, type) {
        this.name = name
        this.type = type

    }
    sayName() {
        console.log("Store name is", this.name, 'and its type is', this.type)
    }
    sayType() {
        return this.type
    }
    attend(city) {
        city.attendees.push(this)
    }
    attend(type) {
        type.attendees.push(this)
    }


}


