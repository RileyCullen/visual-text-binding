import DataColumn from '../../src/Dataset/DataColumn';
import { TDataEntry } from '../../types';

const ARR: Array<TDataEntry> = [1, 2, 3, NaN, 5, NaN];
let data = new DataColumn('sample_name', ARR)

test('DataColumn Properly Initalized', () => {
    expect(data.getName()).toEqual('sample_name');
    expect(data.getAll()).toEqual(ARR);
});

test('DataColumn.getEntry()', () => {
    expect(data.getEntry(2)).toEqual(ARR[2]);
    expect(data.getEntry(-1)).toEqual(NaN)
    expect(data.getEntry(7)).toEqual(NaN)
});

test('DataColumn.getRange()', () => {
    expect(data.getRange(1, 4)).toEqual(ARR.slice(1, 4));
});

test('DataColumn.transform()', () => {
    let double = (d: TDataEntry): TDataEntry => {
        return d * d;
    };
    let transformedData = new DataColumn('sample_name', data.transform(double));
    expect(transformedData.getAll()).toEqual([1, 4, 9, NaN, 25, NaN]);
});