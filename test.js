const EventEmitter = require("events");
const newGoofer = require("./gooferFactory/gooferMaker");
const babyGoofer = require("./babyGooferFactory/babyGooferMaker");
const city = require("./city/cityConstructor")

const goofer1 = newGoofer();
const goofer2 = newGoofer();
const babyGoofer1 = babyGoofer(goofer1,goofer2);
const newCity1 = new city("alextown",4,4);


console.log(goofer1);
console.log(goofer2);
console.log(babyGoofer1);
console.log(newCity1)
