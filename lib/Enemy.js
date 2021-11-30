const Potion = require('./Potion.js');
// include the Character constructor
const Character = require('./Character.js');



class Enemy extends Character {
    constructor(name, weapon) {
        // call parent constructor
        super(name);
       // this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();

     //   this.health = Math.floor(Math.random() * 10 + 85);
     //   this.strength = Math.floor(Math.random() * 5 + 5);
     //   this.agility = Math.floor(Math.random() * 5 + 5);
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}







module.exports = Enemy;
/*  OLD WAY
function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);

}

//Inherit from Character
Enemy.prototype = Object.create(Character.prototype);

Enemy.prototype.getDescription = function()  {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

*/

// Enemy.prototype.getHealth = function() {
//     return `The ${this.name}'s health is now ${this.health}!`;
// };

// Enemy.prototype.isAlive = function () {
//     if(this.health === 0) {
//         return false;
//     }
//     return true;
// };

// Enemy.prototype.getAttackValue = function() {
//     const min = this.strength -5;

//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max-min) + min);
// };

// Enemy.prototype.reduceHealth = function(health) {
//     this.health -= health;

//     if(this.health < 0) {
//         this.health = 0;        
//     }
// };




