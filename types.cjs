const chalk = require('chalk');
module.exports = class Type {
    constructor(type) {
        this.type = type
        this.attendees = []
    }

    report() {
        console.log('The most common type is ', this.type, 'and number of shops', chalk.red(this.attendees.length))
    }
}
