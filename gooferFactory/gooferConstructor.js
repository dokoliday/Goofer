

class Goofer{
  constructor(name, age, genome, sex, health,position, myEvents) {
    this.name = name;
    this.age = age;
    this.genome = genome;
    this.sex = sex;
    this.health = health;
    this.position = position;
    this.myEvents = myEvents;
    this.moveListiner();
    this.gooferMoving();
  }
  // getRandomInt(max) {
  //   return Math.floor(Math.random() * Math.floor(max));
  // }
  moveListiner() {
    this.myEvents.on("One more day passed move your ass", this.gooferMoving)
  };
  gooferMoving(){
  console.log(`goofer ${this.position} just move`)
  }
  
};
module.exports = Goofer;


