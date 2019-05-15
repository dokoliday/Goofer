const newMap = require("./mapFactory");
const EventEmitter = require("events");
class city {
  constructor(name, width, length) {
    this.name = name;
    this.map = newMap(width, length);
    this.eventHandler = new EventEmitter();
  }
}
module.exports = city;
