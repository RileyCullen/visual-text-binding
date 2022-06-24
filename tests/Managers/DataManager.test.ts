import Dataset from '../../src/Dataset/Dataset';
import DataManager from '../../src/Managers/DataManager';

let DATA_ONE = [
    {a: 1, b: 2},
    {a: 3, b: 4},
    {a: 5, b: 6}
];
let NAME = 'test-name';

test('DataManager.getElementByID(invalid_id) returns empty Dataset', () => {
    let manager = new DataManager();
    expect(manager.getElementByID('invalid_id')).toEqual(new Dataset('', []))
});

test('DataManager.getElementByID(id) returns correct element', () => {
    let manager = new DataManager();
    manager.addElement(NAME, DATA_ONE);
    let uid = manager.addElement(NAME, DATA_ONE),
        dataset = manager.getElementByID(uid);

    expect(dataset.getName()).toEqual(NAME);
    expect(dataset.getSubset()).toEqual(DATA_ONE);
});