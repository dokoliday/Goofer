const gooferConstructor = require('./gooferConstructor')
const genome = require('./gooferProperties/genomeGenerator');
const newName = require('./gooferProperties/nameGenerator');
const newAge = require('./gooferProperties/ageGenerator');
const sex = require('./gooferProperties/sexGenerator')



const gooferMaker = (event) => new gooferConstructor(newName(), newAge(), genome(), sex(), 1, null, event)

module.exports = gooferMaker;