//class qui contient un constructor implicite
class gooferConstructor{
  constructor(name, age, genome, sex, position, health) {
    this.name = name;
    this.age = age;
    this.genome = genome;
    this.sex = sex;
    this.position = position;
    this.health = health;
  }
}
module.exports = gooferConstructor;
