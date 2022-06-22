import Dataset from '../../src/Dataset/Dataset';

export type TDataManagerElement = {
    uid: string,
    value: Dataset
}

export interface IManager<T> {
    addElement: (name: string, data: T) => string;
}