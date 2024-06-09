const Store = require('./store.cjs');
const City = require('./cities.cjs');
const Type = require('./types.cjs');
const chalk = require('chalk');
const database = require('./database');

// stores
const carrefour = new Store('carrefour', 'hypermarket')
const DM = new Store('DM', 'drogerie-market')
const gesundShoe = new Store("gesundShoe", 'shoes store')

// cities
const Berlin = new City("Berlin", "Germany")
const Hamburg = new City("Hamburg", "Germany")
const Bucharest = new City("Bucharest", "Romania")


//types of store error
const Drogerie = new Type("drogerie-market")
const hypermarket = new Type("hypermarket")
const ShoesStore = new Type("gesundShoe")


carrefour.sayName()
console.log(carrefour.sayType())

carrefour.attend(Berlin)
carrefour.attend(Hamburg)
DM.attend(Berlin)
DM.attend(Hamburg)
gesundShoe.attend(Bucharest)
gesundShoe.attend(Berlin)

console.log(chalk.blue(Hamburg.report()));
console.log(chalk.red(Bucharest.report()));
console.log(chalk.grey(Berlin.report()));

database.save(Berlin)
const loadedFile = database.load()
console.log(loadedFile.attendees) 