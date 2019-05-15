const EventEmitter = require("events");
const newGoofer = require("./gooferFactory/gooferMaker");
const babyGoofer = require("./babyGooferFactory/babyGooferMaker");
const city = require("./city/cityConstructor");

const goofer1 = newGoofer();
const goofer2 = newGoofer();
const babyGoofer1 = babyGoofer(goofer1, goofer2);
const alextown = new city("alextown", 6, 6);
const myEmitter = new EventEmitter();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

myEmitter.on("we create a world", () => {
  for (let i = 0; i < 30; i++) {
    x = getRandomInt(6);
    y = getRandomInt(6);
    if (alextown.map[x][y].isHere === "nothing") {
      alextown.map[x][y].isHere = newGoofer();
      console.log("goofer placé", x, y);
    } else {
      console.log("pas de place");
    }
  }
});
myEmitter.emit("we create a world");

console.log(alextown.map);
