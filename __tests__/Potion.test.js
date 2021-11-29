const { TestWatcher } = require('@jest/core');
const Potion = require('../lib/Potion.js');

test('creates a random potion object', () => {
    // we use 'new' to create an object
    // we are using a potion object because
    // it stores multiple values
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});