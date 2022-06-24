import { TDataset } from "../types";
import Dataset from "./Dataset/Dataset";
import generateUID from "./Helpers/UID";
import DataManager from "./Managers/DataManager";
import createContainer from "./Helpers/VisualContainer";
import DatasetVisualizer from "./Dataset/DatasetVisualizer";

class VisualizationManager {
    #dataManager: DataManager;
    #container: HTMLElement | null;

    constructor() {
        this.#dataManager = new DataManager();
        this.#container = null;
    }

    addDataset(name: string, data: TDataset): string {
        return this.#dataManager.addElement(name, data);
    }

    getDataset(uid: string): Dataset | null{
        return this.#dataManager.getElementByID(uid);
    }

    visualizeDataset(uid: string): void {
        // find dataset
        let dataset = this.#dataManager.getElementByID(uid);
        if (dataset == null) return;
        // create DataVisualizer object
        let visualizer = new DatasetVisualizer(dataset.getSubset());
        // check if container exists
        this.#container?.appendChild(visualizer.visualize());
    }

    createVisualContainer(width: number, height: number, addToID: string): void {
        if (this.#container === null) {
            this.#container = createContainer(generateUID(), width, height);
            document.getElementById(addToID)?.appendChild(this.#container);
        }
    }
}

export default VisualizationManager;