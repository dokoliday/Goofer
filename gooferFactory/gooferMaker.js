const gooferConstructor = require('./gooferConstructor')
const genome = require('./gooferProperties/genomeGenerator');
const newName = require('./gooferProperties/nameGenerator');
const newAge = require('./gooferProperties/ageGenerator');
const initialPosition = require('./gooferProperties/initialPosition');
const sex = require('./gooferProperties/sexGenerator')


const gooferMaker = () => new gooferConstructor(newName(), newAge(), genome(), sex(), initialPosition(), 1)

module.exports = gooferMaker;