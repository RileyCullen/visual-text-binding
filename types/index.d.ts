import Dataset from '../src/Dataset/Dataset';
import { TDataset } from './Dataset/Dataset';

export { TDataEntry } from './Dataset/DataEntry';
export { TDataset } from './Dataset/Dataset';
export { TTuple } from './Dataset/Dataset';
export { TDataElement } from './Dataset/Dataset';

export { IManager } from './Managers/Manager';
export { TDataManagerElement } from './Managers/Manager';

export interface IVisualElem {
    update: (data: TDataset) => void
}

export type TObserverBindings = {
    [uid: string]: {
        dataset: Dataset,
        dependencies: Array<IVisualElem>,
    }
};