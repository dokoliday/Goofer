const city = require("./city/cityConstructor");
const alextown = new city("alextown", 100, 100);

alextown.emitCreateWorld()
alextown.emitFoodArrive();
alextown.emitWildAnimalsArrive()
alextown.eventHandler.on("i have moved" , function(data){console.log(alextown.map[data.x][data.y])})
// console.log(alextown.map)

