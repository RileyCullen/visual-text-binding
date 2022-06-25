import Dataset from '../src/Dataset/Dataset';
import Observer from '../src/Observer';
import { TTuple } from '../types';

describe('Testing Observer class', () => {
    const DATA = [
        {a: 1, b: 2},
        {a: 3, b: 4}
    ];
    let datasetID = 'sample_id',
        dataset: Dataset,
        observer: Observer;

    beforeEach(() => {
        dataset = new Dataset('sample_name', DATA);
        observer = new Observer();

        observer.addDataset(datasetID, dataset);
    });

    describe('Integration Test with Dataset', () => {
        test('updateDataset should update data', () => {
            let changeTuples: TTuple[] = [[0, 'a'], [1, 'b']],
                changeValues = [100, 200];
            observer.updateDataset(datasetID, changeTuples, changeValues);
            expect(dataset.getSubset()).toEqual([
                {a: 100, b: 2},
                {a: 3, b: 200}
            ]);
        });
    });
});