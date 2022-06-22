import Dataset from '../../src/Dataset/Dataset';

export type TDataManagerElement = {
    uid: string,
    value: Dataset
}

export interface IManager<T, V> {
    addElement: (name: string, data: T) => string;

    /**
     *  Method call returns an empty T object if uid is not found within manager.
     */
    getElementByID: (uid: string) => V;
}