import Dataset from '../../src/Dataset/Dataset';

let DATA = [
    {a: 1, b: 2, c: 3, d: 10},
    {a: 4, b: 5, c: 6, d: 11},
    {a: 7, b: 8, c: 9, d: 12},
];

let dataset = new Dataset('test_dataset', DATA);

test('Dataset.getSubset() returns DATA', () => {
    expect(dataset.getSubset()).toEqual(DATA);
});

test('Dataset.getSubset([], [a, b, d]) returns correct subset', () => {
    expect(dataset.getSubset([], ['a', 'b', 'd'])).toEqual([
        {a: 1, b: 2, d: 10},
        {a: 4, b: 5, d: 11},
        {a: 7, b: 8, d: 12},
    ]);
});

test('Dataset.getSubset([0, 2]) returns correct subset', () => {
    expect(dataset.getSubset([0, 2])).toEqual([
        {a: 1, b: 2, c: 3, d: 10},
        {a: 7, b: 8, c: 9, d: 12},
    ]);
});

test('Data.getSubset([0, 2], [a, b, d]) returns correct subset', () => {
    expect(dataset.getSubset([0, 2], ['a', 'b', 'd'])).toEqual([
        {a: 1, b: 2, d: 10},
        {a: 7, b: 8, d: 12},
    ]);
});

test('Data.modify(0, a, 100)', () => {
    dataset.modify(0, 'a', 100);
    let [ value ] = dataset.getSubset([0], ['a']);
    expect(value.a).toEqual(100);
});