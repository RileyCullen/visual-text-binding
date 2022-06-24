import { TDataset } from "../types";
import Dataset from "./Dataset/Dataset";
import DataManager from "./Managers/DataManager";
import VisualContainer from "./VisualContainer/VisualContainer";

class VisualizationManager {
    #dataManager: DataManager;

    constructor() {
        this.#dataManager = new DataManager();

        // If custom elements not defined, define them.
        if (customElements.get('vis-container') === undefined) {
            customElements.define('vis-container', VisualContainer);
        }
    }

    addDataset(name: string, data: TDataset): string {
        return this.#dataManager.addElement(name, data);
    }

    getDataset(uid: string): Dataset {
        return this.#dataManager.getElementByID(uid);
    }
}

export default VisualizationManager;