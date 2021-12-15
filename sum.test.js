const { TestWatcher } = require('jest');
const sum = require('./apps');

test('confirmation',() => {
    expect(sum(2, 4)).toBe(6);
});