
const Potion = require('../lib/Potion.js');


function Player(name = '')  {
this.name = name;

this.health = Math.floor(Math.random() * 10 + 95);
this.strength = Math.floor(Math.random() * 5 +7);
this.agility = Math.floor(Math.random() * 5 + 7);

// add inventory
this.inventory = [new Potion('health'), new Potion()];

//console.log('inventory: ' , this.inventory);

}



module.exports = Player;