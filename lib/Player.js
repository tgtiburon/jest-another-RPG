
const Potion = require('../lib/Potion.js');


function Player(name = '')  {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

}
// by using prototype we only create one getStats method
// if we used the old way we could create these methods for each player.
// player inherits the method from the prototype
Player.prototype.getStats = function() {

    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function () {
    if(this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`
};


Player.prototype.isAlive = function () {
    if(this.health === 0) {
        return false;
    }
    return true;
};

Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if(this.health < 0 ) {
        this.health = 0;
    }

};

Player.prototype.getAttackValue = function () {
    const min = this.strength -5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min)+ min);
};
// push adds to the end of the array

Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
}

Player.prototype.usePotion = function(index) {
    // splice method removes items from an array and returns the
    // removed items as a new array.  two things happen
    // 1. inventory has a single potion removed at the specific index
    // and is put into a new removed items array.
    // 2. potion at index 0 of this removed items array is saved in a potion
    // variable
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name)    {
        case 'agility': 
            this.agility += potion.value;
            break;
        case 'health': 
            this.health += potion.value;
            break;
        case 'strength' :
            this.strength += potion.value;
            break;

    }
};


    
    // Before refactor
    /*  this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 +7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    // add inventory
    this.inventory = [new Potion('health'), new Potion()];

    //console.log('inventory: ' , this.inventory);

    // returns an object with various player properties
    this.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    //returns the inventory array or false if empty
    this.getInventory = function () {
        if(this.inventory.length) {
            return this.inventory;
        }
        return false;
    };  */

//}



module.exports = Player;