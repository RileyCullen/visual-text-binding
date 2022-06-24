import { IManager, TDataManagerElement, TDataset } from "../../types";
import Dataset from "../Dataset/Dataset";
import generateUID from "../Helpers/UID";

class DataManager implements IManager<TDataset, Dataset> {
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

    getElementByID(id: string): (Dataset | null) {
        for (let i = 0; i < this.#elementList.length; i++) {
            let { uid, value } = this.#elementList[i];
            if (uid === id) return value;
        }
        return null;
    }
}

export default DataManager;