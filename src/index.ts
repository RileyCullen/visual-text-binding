import { TDataset, TTuple } from "../types";
import Dataset from "./Dataset/Dataset";
import generateUID from "./Helpers/UID";
import DataManager from "./Managers/DataManager";
import createContainer from "./Helpers/VisualContainer";
import DatasetVisualizer from "./Dataset/DatasetVisualizer";
import Observer from "./Observer";
import TextElem from "./TextElement/TextElem";

class VisualizationManager {
    #dataManager: DataManager;
    #container: HTMLElement | null;
    #observer: Observer;

    constructor() {
        this.#dataManager = new DataManager();
        this.#container = null;
        this.#observer = new Observer();
    }

    addDataset(name: string, data: TDataset): string {
        let uid = this.#dataManager.addElement(name, data);
        let dataset = this.#dataManager.getElementByID(uid);
        if (dataset !== null){
            // NOTE that this should always be invoked but needs to be here for
            // type reasons.
            this.#observer.addDataset(uid, dataset);
        }
        return uid;
    }

    getDataset(uid: string): Dataset | null{
        return this.#dataManager.getElementByID(uid);
    }

    visualizeDataset(uid: string): void {
        // find dataset
        let dataset = this.#dataManager.getElementByID(uid);
        if (dataset == null) return;
        // create DataVisualizer object
        let visualizer = new DatasetVisualizer(uid, dataset.getSubset(), this.#observer);
        // check if container exists
        this.#container?.appendChild(visualizer.visualize());
        // create binding
        this.#observer.addBinding(uid, visualizer);
    }

    addTextBinding(uid: string, tuple: TTuple, divStyle: Object, pStyle: Object) {
        let dataset = this.#dataManager.getElementByID(uid);
        if (dataset == null) return;

        let text = new TextElem(uid, dataset.getSubset(), tuple, this.#observer,
            divStyle, pStyle);
        this.#container?.appendChild(text.visualize());
        this.#observer.addBinding(uid, text);
    }

    createVisualContainer(width: number, height: number, addToID: string): void {
        if (this.#container === null) {
            this.#container = createContainer(generateUID(), width, height);
            document.getElementById(addToID)?.appendChild(this.#container);
        }
    }
}

export default VisualizationManager;