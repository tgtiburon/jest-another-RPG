const Player = require('../lib/Player.js');
const Potion = require('../lib/Potion.js');

// mocks/replaces the constructors implementation
// with our faked data
// if new Potion() is called it will use
// our mocked data
jest.mock('../lib/Potion');


// test to see it mocked the potion
console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    // Player's inventory should be an array containing an object
    expect(player.inventory).toEqual(
            expect.arrayContaining([expect.any(Object)])
    );
});

test("gets player's stats as an object", () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');



});

test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    // set inventory to empty below so we can test it.
    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});