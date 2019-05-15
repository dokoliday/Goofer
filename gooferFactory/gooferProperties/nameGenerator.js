 var faker = require("faker/locale/en_GB");

const newName=()=> faker.name.findName()

module.exports=newName;