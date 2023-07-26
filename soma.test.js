const {soma} = require("./soma")

test('add 1 + 2 to equal 3', () => {
    expect(sum(2, 2)).toBe(4);
})  

test('add 1 + 2 not to equal 5', () => {
    expect(sum(2, 2)).not.toBe(5);
})  