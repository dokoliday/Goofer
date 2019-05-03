const sexGenerator = () => {
  
  if (Math.floor(Math.random() * 100) + 1 > 40) {
    return "female";
  } else {
    return  "male";
  }
};
module.exports = sexGenerator;
