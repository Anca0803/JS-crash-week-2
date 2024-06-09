const chalk = require('chalk');
module.exports = class City {
    constructor(cityName, countryName) {
        this.cityName = cityName
        this.countryName = countryName
        this.attendees = []
    }
    report() {
        console.log(this.cityName, 'is from', chalk.red.bgRed.bold(this.countryName), 'and number of stores are', chalk.red(this.attendees.length))
    }
}

