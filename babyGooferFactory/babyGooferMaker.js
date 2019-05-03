const gooferConstructor = require("../gooferFactory/gooferConstructor");
const newName = require("../gooferFactory/gooferProperties/nameGenerator");
const sex = require("../gooferFactory/gooferProperties/sexGenerator");

const babyGooferMaker = (papaGoofer, mamaGoofer) => {
  const babyGenome = mamaGoofer.genome
    .slice(0, 5)
    .concat(papaGoofer.genome.slice(5, 10));
  return new gooferConstructor(
    newName(),
    0,
    babyGenome,
    sex(),
    mamaGoofer.position,
    1
  );
};
module.exports = babyGooferMaker;
