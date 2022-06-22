import { IManager, TDataManagerElement, TDataset } from "../../types";
import Dataset from "../Dataset/Dataset";
import generateUID from "../Helpers/UID";

class DataManager implements IManager<TDataset> {
    #elementList: Array<TDataManagerElement>;

    constructor() {
        this.#elementList = [];
    }

    addElement(name: string, data: TDataset): string {
        let uid = generateUID();
        this.#elementList.push({
            uid: uid,
            value: new Dataset(name, data),
        });
        return uid;
    }
}

export default DataManager;