import { TDataset } from "../types";
import DataManager from "./Managers/DataManager";

class VisualizationManager {
    #dataManager: DataManager;

    constructor() {
        this.#dataManager = new DataManager();
    }

    addDataset(name: string, data: TDataset): string {
        return this.#dataManager.addElement(name, data);
    }
}

export default VisualizationManager;