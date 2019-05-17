const newMap = require("./mapFactory");
const EventHandler= require("events");
const newGoofer = require("../gooferFactory/gooferMaker");
const chalk = require("chalk");

class city {
  constructor(name, width, length) {
    this.name = name;
    this.map = newMap(width, length);
    this.eventHandler= new EventHandler();
  

    this.gofferOnMapListener(width,length);
    this.sendFoodListener();
    this.animalsArriveListener();
    this.emitOneDayPassed();
  }
  emitOneDayPassed(){
    setInterval(() => {
      this.eventHandler.emit("One more day passed move your ass");
    }, 1000);
  }
  emitCreateWorld() {
    this.eventHandler.emit("we place goffers");
  }
  emitFoodArrive() {
    setInterval(() => {
      this.eventHandler.emit("food send by god");
    }, 10000);
  }
  emitWildAnimalsArrive() {
    setInterval(() => {
      this.eventHandler.emit("we place animals");
    }, 30000);
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  gofferOnMapListener(xmax,ymax) {
    this.eventHandler.on("we place goffers", () => {
      for (let i = 0; i < 2; i++) {
        const x = this.getRandomInt(xmax);
        const y = this.getRandomInt(ymax);
        if (this.map[x][y].isHere === "nothing") {
          this.map[x][y].isHere = newGoofer(this.eventHandler);
          this.map[x][y].isHere.position = { latitude: x, longitude: y };
          console.log(chalk.green("goofer placé", x, y));
          console.log(this.map[x][y])
        } else {
          console.log(chalk.red("pas de place en ", [x], [y]));
        }
      }
    });
  }
  sendFoodListener() {
    this.eventHandler.on("food send by god", () => {
      for (let i = 0; i < 3; i++) {
        const x = this.getRandomInt(6);
        const y = this.getRandomInt(6);
        if (this.map[x][y].isHere === "nothing") {
          this.map[x][y].isHere = "food";
          console.log(chalk.green("food placé", x, y));
        } else {
          console.log(chalk.red("pas de place en ", [x], [y]));
        }
      }
    });
  }
  animalsArriveListener() {
    this.eventHandler.on("food send by god", () => {
      for (let i = 0; i < 2; i++) {
        const x = this.getRandomInt(6);
        const y = this.getRandomInt(6);
        if (this.map[x][y].isHere === "nothing"|| "food") {
          this.map[x][y].isHere = "animal";
          console.log(chalk.green("animal placé", x, y));
        } else {
          console.log(chalk.red("pas de place en ", [x], [y]));
        }
      }
    });
  }
}

module.exports = city;
