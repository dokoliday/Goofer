class Goofer {
  constructor(name, age, genome, sex, health, position, myEvents) {
    this.name = name;
    this.age = age;
    this.genome = genome;
    this.sex = sex;
    this.health = health;
    this.position = position;
    this.myEvents = myEvents;

    this.gooferMoving = () => {
     const x = this.position.latitude + this.getDirection();
      const y = this.position.longitude + this.getDirection();
      this.emitMoved(x,y);
    };

    this.moveListiner();
  };


  getDirection() {
    const direction =[-1,0,1]
      return direction [Math.floor(Math.random() * Math.floor(3))];
    }
  moveListiner() {
    this.myEvents.on("One more day passed move your ass", this.gooferMoving);
  }

  emitMoved(x,y){
      this.myEvents.emit("i have moved",x,y);
    }
  }

module.exports = Goofer;
