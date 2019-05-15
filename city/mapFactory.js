const Place = require("./place");

const arrayNullCreator = x => {
  return new Array(x).fill();
};
const grid = (x, y) => {
  return arrayNullCreator(x).fill(arrayNullCreator(y));
};
const mapCreator = (width, height) => {
  let newGrid = grid(width, height).map((e,index2)=>e.map((e,index1)=> e = new Place(index2,index1,"nothing")));
  return newGrid;
};
module.exports = mapCreator;
