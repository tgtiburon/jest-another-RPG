const inquirer = require('inquirer');
const Enemy = require('./Enemy.js');
const Player = require('./Player.js');



function Game() {

    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;



}

Game.prototype.intializeGame = function() {

   
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'flail'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

     // first enemy in enemies array will be first to fight
    this.currentEnemy = this.enemies[0];


    // Now get the players name
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        // destructure name from prompt object
        .then(({name}) => {
            this.player = new Player(name);

            // test the object creation
           // console.log(this.currentEnemy, this.player);
            this.startNewBattle();
        });

        // if we would have done
        /*  .then(function({name}) {
            this.player = new Player(name);
            
            //test the object creation
            console.log(this.currentEnemy, this.player);
            

        // the function keyword would have created a new lexical scope where
        // this refers to the player??
        // by using => it references the game object
        // Use arrows for all inquirer in this project
            
            */

};

module.exports = Game;