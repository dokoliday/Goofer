const city = require("./city/cityConstructor");
const alextown = new city("alextown", 100, 100);

alextown.emitCreateWorld()
alextown.emitFoodArrive();
alextown.emitWildAnimalsArrive()
alextown.eventHandler.on("i have moved" , function(daa){alextown.map[daa.x][daa.y]})
// console.log(alextown.map)

