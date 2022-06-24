import { TDataset } from "../types";
import Dataset from "./Dataset/Dataset";
import DataManager from "./Managers/DataManager";

class VisualizationManager {
    #dataManager: DataManager;

    constructor() {
        this.#dataManager = new DataManager();
    }

    addDataset(name: string, data: TDataset): string {
        return this.#dataManager.addElement(name, data);
    }

    getDataset(uid: string): Dataset {
        return this.#dataManager.getElementByID(uid);
    }
}

export default VisualizationManager;