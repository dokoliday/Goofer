const EventEmitter = require('events');
const newGoofer = require('./gooferFactory/gooferMaker')
const babyGoofer = require('./babyGooferFactory/babyGooferMaker')
papaGoofer =newGoofer();
mamaGoofer=newGoofer();


const now =()=>{setInterval(() => {
  new EventEmitter().emit(console.log(newGoofer()))
  }, 3)};

now();