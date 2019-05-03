const genomeCreator = () => {
  arrayRandomNumber = Array(10).fill(null);
  arrayRandomNumber.forEach((e, index, array) => {
    array[index] = "ABCDEFJGHIJ"[Math.floor(Math.random() * 10)];
  });
  return arrayRandomNumber;
};
module.exports = genomeCreator;
